"use client";

import { Poppins } from "next/font/google";

import { LogOut } from "lucide-react";

import { signOut } from "@/server/auth";
import { cn } from "@/utils/cn";
import ServerButton from "./server-button";

type UserCardProps = {
  imageLink: string | null | undefined;
  name: string | null | undefined;
};

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function UserCard(props: UserCardProps) {
  return (
    <div className={cn("flex items-center justify-center gap-x-2")}>
      <img
        className="aspect-square rounded-full border-2 border-[#ccccd2]"
        width={30}
        height={30}
        src={props.imageLink ?? "/default_profile.png"}
        alt="User"
      />
      <h4 className="text-base font-semibold">{props.name}</h4>
      <span className="mx-4 h-6 w-[1px] bg-[#ccccd2] opacity-50" />
      <ServerButton
        action={async () => await signOut()}
        className={cn(
          poppins.className,
          "bg-transparent p-0 hover:bg-transparent",
        )}
      >
        <LogOut />
      </ServerButton>
    </div>
  );
}
