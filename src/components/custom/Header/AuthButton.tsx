"use client";

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { useSession, signOut } from "next-auth/react";

import { Button } from "@/components/primitives/button";
import { cn } from "@/utils/cn";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function AuthButton() {
  const { data: session } = useSession();

  return session && session.user ? (
    <div>
      {session.user.image && (
        <Image src={session.user.image} alt="User" height={10} width={10} />
      )}
      <p className={cn(poppins.className, "text-base")}>{session.user.name}</p>
      <Button
        onClick={() => signOut()}
        size="xs"
        className={cn(poppins.className)}
      >
        Logout
      </Button>
    </div>
  ) : (
    <div className="flex gap-4 items-center justify-center">
      <Link href="/auth/signup">
        <Button size="xs" variant="outline" className={cn(poppins.className)}>
          Sign Up
        </Button>
      </Link>
      <span className="bg-[#ccccd2] w-[1px] opacity-50 h-6"></span>
      <Link href="/auth/login">
        <Button size="xs" className={cn(poppins.className)}>
          Login
        </Button>
      </Link>
    </div>
  );
}
