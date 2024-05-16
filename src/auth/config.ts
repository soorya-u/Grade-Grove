import { randomUUID } from "crypto";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

import { NextAuthConfig } from "next-auth";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from "@/lib/db";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { Credentials } from "./credentials";
import { decode, encode } from "next-auth/jwt";

const adapter = PrismaAdapter(prisma) as Adapter;
const session = {
  maxAge: 30 * 24 * 60 * 60, // 30 days
  updateAge: 24 * 60 * 60, // 24 hours
};

export const nextAuthConfig = (
  req: NextRequest | undefined,
): NextAuthConfig => {
  const isCredentialLogin =
    req &&
    req.url.includes("callback") &&
    req.url.includes("credentials") &&
    req.method === "POST";

  return {
    callbacks: {
      signIn: async ({ user }) => {
        if (isCredentialLogin) {
          if (user && user.id) {
            const sessionToken = randomUUID();
            const sessionExpiry = new Date(Date.now() + session.maxAge * 1000);

            if (adapter && adapter.createSession)
              await adapter.createSession({
                sessionToken,
                userId: user.id,
                expires: sessionExpiry,
              });

            cookies().set("authjs.session-token", sessionToken, {
              expires: sessionExpiry,
            });
          } else {
            return false;
          }
        }

        return true;
      },
      session: ({ session }) => {
        const { user: sessionUser, ...rest } = session;
        const { email, role, image, name } = sessionUser;
        const newSession = {
          user: {
            name,
            image,
            role,
            email,
          },
          ...rest,
        };

        return newSession;
      },
    },
    adapter,
    providers: [Google, Github, Credentials],
    pages: {
      signIn: "/auth/login",
      error: "/auth/login",
    },
    session,
    jwt: {
      encode: (params) =>
        isCredentialLogin
          ? cookies().get("authjs.session-token")?.value ?? ""
          : encode(params),
      decode: (params) => (isCredentialLogin ? null : decode(params)),
    },
  };
};
