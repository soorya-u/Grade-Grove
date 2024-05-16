import { cache } from "react";
import NextAuth from "next-auth";
import { nextAuthConfig } from "@/auth/config";

const { auth: nextAuth, handlers, signIn, signOut } = NextAuth(nextAuthConfig);

const auth = cache(nextAuth);

export { handlers, signIn, signOut, auth };
