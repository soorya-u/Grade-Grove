import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { $Enums } from "@prisma/client";

import env from "@/schema/env";
import prismaClient from "./db";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 77_76_000, // 90 days
  },

  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
      profile: (profile) => ({
        id: profile.sub,
        name: `${profile.given_name} ${profile.family_name}`,
        email: profile.email,
        image: profile.picture,
        role: profile.role || $Enums.Role.Normal,
      }),
    }),
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
      profile: (profile) => ({
        id: profile.id,
        name: profile.name,
        email: profile.email,
        image: profile.avatar_url,
        role: profile.role ?? $Enums.Role.Normal,
      }),
    }),
  ],
  // @ts-ignore
  adapter: PrismaAdapter(prismaClient),

  callbacks: {
    // @ts-ignore
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
  secret: env.JWT_SECRET,
  pages: {
    signIn: "/auth/login",
  },
};
