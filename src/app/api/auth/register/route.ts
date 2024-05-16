import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as bcrypt from "bcrypt";
import { randomUUID } from "crypto";

import { signUpSchema } from "@/schema/signup";
import prisma from "@/lib/db";
import { ResponseType } from "@/types/api";
import env from "@/schema/env";

import VerifyEmail from "@/emails/VerifyEmail";

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

  if (existingUser) {
    if (existingUser.emailVerified)
      return NextResponse.json<ResponseType>(
        {
          title: "User Already Exits",
          description: "Entered Email has already been Registered.",
        },
        { status: 409 },
      );
    else
      return NextResponse.json<ResponseType>(
        {
          title: "Email has already been Registered",
          description:
            "Entered Email has already been Registered. Please verify your Email.",
        },
        { status: 409 },
      );
  }

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

  const token = randomUUID();

  const resend = new Resend(env.RESEND_KEY);

  const verTk = await prisma.verificationToken.create({
    data: {
      token,
      identifier: user.id,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 6), // 6 hrs
    },
  });

  if (!verTk)
    return NextResponse.json<ResponseType>(
      {
        title: "Unable to create User",
        description: "Authentication Failed due to Unknown Reason. Try Later",
      },
      { status: 500 },
    );

  const res = await resend.emails.send({
    from: "grade-grove@email.soorya-u.dev",
    to: user.email,
    subject: "Verify your Email for Grade Grove",
    react: VerifyEmail({ userId: user.id, token }),
  });

  if (res.error)
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
