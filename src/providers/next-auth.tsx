"use client";

import { SessionProvider } from "next-auth/react";

type NextAuthProviderProps = {
  children: React.ReactNode;
};

export default function NextAuthProvider(props: NextAuthProviderProps) {
  return <SessionProvider>{props.children}</SessionProvider>;
}
