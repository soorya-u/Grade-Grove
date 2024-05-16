import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";

import { signUpSchema } from "@/schema/signup";
import prisma from "@/lib/db";
import { ResponseType } from "@/types/api";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const parsedBody = signUpSchema.safeParse(body);

  if (parsedBody.error)
    return NextResponse.json<ResponseType>(
      { title: "Invalid Credentials", description: parsedBody.error.message },
      { status: 400 },
    );

  const { email, firstName, lastName, password: rawPassword } = parsedBody.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser)
    return NextResponse.json<ResponseType>(
      {
        title: "User Already Exits",
        description: "Entered Email has already been Registered.",
      },
      { status: 409 },
    );

  const password = await bcrypt.hash(rawPassword, 10);

  const user = await prisma.user.create({
    data: {
      email,
      name: `${firstName} ${lastName}`,
      password,
    },
  });

  if (!user)
    return NextResponse.json<ResponseType>(
      {
        title: "Unable to create User",
        description: "Authentication Failed due to Unknown Reason. Try Later",
      },
      { status: 500 },
    );

  const account = await prisma.account.create({
    data: {
      userId: user.id,
      type: "credentials",
      provider: "credentials",
      providerAccountId: user.id,
    },
  });

  if (!account)
    return NextResponse.json<ResponseType>(
      {
        title: "Unable to create User",
        description: "Authentication Failed due to Unknown Reason. Try Later",
      },
      { status: 500 },
    );

  return NextResponse.json<ResponseType>(
    {
      title: "Registration Successfull",
      description: "Please Check your Inbox and verify your Email",
    },
    { status: 200 },
  );
}
