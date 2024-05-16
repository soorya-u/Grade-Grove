import { randomUUID } from "crypto";
import * as bcrypt from "bcrypt";
import { Resend } from "resend";
import NextAuthCredentials from "next-auth/providers/credentials";

import {
  InvalidCredentialError,
  UnverifiedUserError,
  ExpiredUserError,
  UserNotFoundError,
  UnexpectedError,
} from "@/errors/auth";
import { loginSchema } from "@/schema/login";
import env from "@/schema/env";
import VerifyEmail from "@/emails/VerifyEmail";
import prisma from "@/lib/db";

export const Credentials = NextAuthCredentials({
  name: "Credentials",
  authorize: async (credentials) => {
    const parsedCredentials = await loginSchema.safeParseAsync(credentials);
    if (parsedCredentials.error) throw new InvalidCredentialError();

    const { email, password } = parsedCredentials.data;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new UserNotFoundError();

    if (!user.emailVerified) {
      const verificationToken = await prisma.verificationToken.findFirst({
        where: {
          identifier: user.id,
        },
      });

      if (
        !verificationToken ||
        verificationToken.expires.getTime() < Date.now()
      ) {
        await prisma.verificationToken.deleteMany({
          where: {
            identifier: user.id,
          },
        });

        const token = randomUUID();

        const resend = new Resend(env.RESEND_KEY);

        const verTk = await prisma.verificationToken.create({
          data: {
            token,
            identifier: user.id,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 6), // 6 hrs
          },
        });

        if (!verTk) throw new UnexpectedError();

        const res = await resend.emails.send({
          from: "grade-grove@email.soorya-u.dev",
          to: user.email,
          subject: "Verify your Email for Grade Grove",
          react: VerifyEmail({ userId: user.id, token }),
        });

        if (res.error) throw new UnexpectedError();

        throw new ExpiredUserError();
      }

      throw new UnverifiedUserError();
    }

    const isPasswordVerified = await bcrypt.compare(
      password,
      user.password ?? "",
    );

    if (!isPasswordVerified) throw new InvalidCredentialError();

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      image: user.image,
    };
  },
});
