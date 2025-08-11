"use client";

import { LogOut } from "lucide-react";

import { signOut } from "@/server/auth";
import { cn } from "@/utils/cn";
import ServerButton from "./server-button";
import { poppins } from "@/fonts";

type UserCardProps = {
  imageLink: string | null | undefined;
  name: string | null | undefined;
};

export default function UserCard(props: UserCardProps) {
  return (
    <div className={cn("flex items-center justify-center gap-x-2")}>
      <img
        className="box-content aspect-square size-[32px] rounded-full border-2 border-[#ccccd2]"
        width={30}
        height={30}
        src={props.imageLink ?? "/default_profile.png"}
        alt={`${props.name}'s Profile Picture`}
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
