"use server";

import { signIn } from "@/lib/auth";

export async function signInGoogle() {
  await signIn("google");
}

export async function signInGitHub() {
  await signIn("github");
}
