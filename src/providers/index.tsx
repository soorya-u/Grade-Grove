"use client";

import NextAuthProvider from "./NextAuthProvider";

type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers(props: ProvidersProps) {
  return <NextAuthProvider>{props.children}</NextAuthProvider>;
}
