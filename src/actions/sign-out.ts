"use server";

import { signOut as NextAuthSignOut } from "@/lib/auth";

export async function signOut() {
  await NextAuthSignOut();
}
