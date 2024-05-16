"use server";

import { signIn } from "@/lib/auth";
import { signOut as NextAuthSignOut } from "@/lib/auth";

export async function signInGoogle(formData: FormData) {
  const callbackUrl = formData.get("callbackUrl")?.toString();
  await signIn("google", { redirect: true, redirectTo: callbackUrl });
}

export async function signInGitHub(formData: FormData) {
  const callbackUrl = formData.get("callbackUrl")?.toString();
  await signIn("github", { redirect: true, redirectTo: callbackUrl });
}

export async function signInCredentials(payload: {
  email: string;
  password: string;
  callbackUrl: string;
}) {
  await signIn("credentials", {
    redirectTo: payload.callbackUrl,
    redirect: true,
    email: payload.email,
    password: payload.password,
  });
}

export async function signOut() {
  await NextAuthSignOut();
}
