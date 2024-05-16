import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import env from "@/schema/env";

export async function GET(req: NextRequest) {
  const identifier = req.nextUrl.searchParams.get("id") ?? "";
  const token = req.nextUrl.searchParams.get("tk") ?? "";

  const verificationToken = await prisma.verificationToken.delete({
    where: {
      identifier_token: {
        identifier,
        token,
      },
    },
  });

  if (!verificationToken)
    return NextResponse.json({
      message: "verification token not found",
    });

  if (verificationToken.expires.getTime() < Date.now())
    return NextResponse.json({
      message: "Email Expired",
    });

  const user = await prisma.user.update({
    data: {
      emailVerified: new Date(),
    },
    where: {
      id: verificationToken.identifier,
    },
  });

  if (!user)
    return NextResponse.json({
      message: "Something went Wrong",
    });

  return NextResponse.redirect(env.NEXT_PUBLIC_URL);
}
