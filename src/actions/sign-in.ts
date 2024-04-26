"use server";

import { signIn } from "@/lib/auth";

export async function signInGoogle(formData: FormData) {
  const callbackUrl = formData.get("callbackUrl")?.toString();
  await signIn("google", { redirect: true, redirectTo: callbackUrl });
}

export async function signInGitHub(formData: FormData) {
  const callbackUrl = formData.get("callbackUrl")?.toString();
  await signIn("github", { redirect: true, redirectTo: callbackUrl });
}
