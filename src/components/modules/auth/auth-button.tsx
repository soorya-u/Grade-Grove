import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { auth } from "@/lib/auth";
import { poppins } from "@/fonts";

import UserCard from "../user-card";


export default async function AuthButton() {
  const session = await auth();

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
