import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import prisma from "./db";
import { cache } from "react";

const {
  auth: nextAuth,
  handlers,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    session: ({ session, user }) => {
      session.user.role = user.role;
      return session;
    },
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [Google, GitHub],
  pages: {
    signIn: "/auth/signup",
  },
});

const auth = cache(nextAuth);

export { handlers, signIn, signOut, auth };
