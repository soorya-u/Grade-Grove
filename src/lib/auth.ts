import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import env from "@/schema/env";

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [Google, GitHub],
  pages: {
    signIn: "/auth/signup",
  },
});
