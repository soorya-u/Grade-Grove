"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";

import { useSession, signOut } from "next-auth/react";

import { Button } from "@/components/primitives/button";
import { cn } from "@/utils/cn";
import UserCard from "../UserCard";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function AuthButton() {
  const { data: session } = useSession();

  return session && session.user ? (
    <UserCard imageLink={session.user.image} name={session.user.name} />
  ) : (
    <div className="flex items-center justify-center gap-4">
      <Link href="/auth/signup">
        <Button size="xs" variant="outline" className={cn(poppins.className)}>
          Sign Up
        </Button>
      </Link>
      <span className="h-6 w-[1px] bg-[#ccccd2] opacity-50"></span>
      <Link href="/auth/login">
        <Button size="xs" className={cn(poppins.className)}>
          Login
        </Button>
      </Link>
    </div>
  );
}
