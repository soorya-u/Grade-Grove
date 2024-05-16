import { cache } from "react";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";

import { NextRequest } from "next/server";

import NextAuth, { type NextAuthConfig } from "next-auth";
import { encode, decode } from "next-auth/jwt";

import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";

import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import NextAuthCredentials from "next-auth/providers/credentials";

import prisma from "./db";

const adapter = PrismaAdapter(prisma) as Adapter;
const session = {
  maxAge: 30 * 24 * 60 * 60, // 30 days
  updateAge: 24 * 60 * 60, // 24 hours
};

const Credentials = NextAuthCredentials({
  name: "Credentials",
  authorize: async ({ username }) => {
    const user = await prisma.user.findUnique({
      where: {
        email: username as string,
      },
    });

    if (user)
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        image: user.image,
      };

    return null;
  },
});

const nextAuthConfig = (req: NextRequest | undefined): NextAuthConfig => {
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
      session: ({ session, user }) => {
        session.user.role = user.role;
        return session;
      },
    },
    adapter,
    providers: [Google, GitHub, Credentials],
    pages: {
      signIn: "/auth/signup",
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

const { auth: nextAuth, handlers, signIn, signOut } = NextAuth(nextAuthConfig);

const auth = cache(nextAuth);

export { handlers, signIn, signOut, auth };
