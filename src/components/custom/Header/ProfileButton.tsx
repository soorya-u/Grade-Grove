"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

import { useSession, signIn, signOut } from "next-auth/react";

import { Button } from "@/components/primitives/button";
import { cn } from "@/utils/cn";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function ProfileButton() {
  const { data: session } = useSession();

  return session && session.user ? (
    <div className="flex">
      {session.user.image && (
        <Image src={session.user.image} alt="User" height={10} width={10} />
      )}
      <p className={cn(poppins.className, "text-base")}>{session.user.name}</p>
      <Button
        onClick={() => signOut()}
        size="sm"
        className={cn(poppins.className, "text-md")}
      >
        Logout
      </Button>
    </div>
  ) : (
    <Button
      onClick={() => signIn()}
      size="sm"
      className={cn(poppins.className, "text-md")}
    >
      Login
    </Button>
  );
}
