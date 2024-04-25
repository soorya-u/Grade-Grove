"use server";

import { signIn } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function signInGoogle(callbackUrl: string) {
  try {
    await signIn("google", { redirect: true, redirectTo: callbackUrl });
  } catch (err) {
    revalidatePath("/auth/signup");
  }
}

export async function signInGitHub(callbackUrl: string) {
  try {
    await signIn("github", { redirect: true, redirectTo: callbackUrl });
  } catch (err) {
    revalidatePath("/auth/signup");
  }
}
