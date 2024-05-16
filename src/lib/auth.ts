import { cache } from "react";
import { randomUUID } from "crypto";
import * as bcrypt from "bcrypt";
import { cookies } from "next/headers";

import { NextRequest } from "next/server";

import NextAuth, { type NextAuthConfig } from "next-auth";
import { encode, decode } from "next-auth/jwt";

import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";

import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import NextAuthCredentials from "next-auth/providers/credentials";

import { loginSchema } from "@/schema/login";
import prisma from "./db";

const adapter = PrismaAdapter(prisma) as Adapter;
const session = {
  maxAge: 30 * 24 * 60 * 60, // 30 days
  updateAge: 24 * 60 * 60, // 24 hours
};

const Credentials = NextAuthCredentials({
  name: "Credentials",
  authorize: async (credentials) => {
    const parsedCredentials = await loginSchema.safeParseAsync(credentials);
    if (parsedCredentials.error) return null; // Handle Error

    const { email, password } = parsedCredentials.data;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) return null; // Handle Error

    if (!user.emailVerified) return null; // Handle Error

    const isPasswordVerified = await bcrypt.compare(
      password,
      user.password ?? "",
    );

    if (!isPasswordVerified) return null; // Handle Error

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      image: user.image,
    };
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
