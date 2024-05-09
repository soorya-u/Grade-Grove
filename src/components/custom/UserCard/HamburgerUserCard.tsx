"use client";

import { Quicksand } from "next/font/google";

import { ChevronDown, LogOut } from "lucide-react";

import { signOut } from "@/server/auth";
import { cn } from "@/utils/cn";
import ServerButton from "./ServerButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/primitives/accordion";
import { useState } from "react";

type UserCardProps = {
  imageLink: string | null | undefined;
  name: string | null | undefined;
  className?: string;
};

const quicksand = Quicksand({ weight: "600", subsets: ["latin"] });

export default function HamburgerUserCard(props: UserCardProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger
          onClick={() => setAccordionOpen((prev) => !prev)}
          className={cn(
            quicksand.className,
            "flex w-full items-center justify-start gap-3 rounded-xl border-2 border-white px-2 py-3 text-lg",
            accordionOpen
              ? "bg-white text-[#BE2E58]"
              : "bg-transparent text-white",
          )}
        >
          <img
            src={props.imageLink ?? "/default_profile.png"}
            alt="User"
            width={30}
            height={30}
            className={cn(
              "aspect-square rounded-full border-2",
              accordionOpen ? "border-[#BE2E58]" : "border-[#fff]",
            )}
          />
          {props.name}
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 transition-transform duration-200",
              accordionOpen
                ? "h-8 w-8 [&_path]:fill-[#BE2E58]"
                : "[&_path]:fill-[#fff]",
            )}
          />
        </AccordionTrigger>
        <AccordionContent className="ml-4 mt-2">
          <ServerButton
            action={async () => await signOut()}
            className={cn(
              quicksand.className,
              "group my-3 flex h-14 w-full items-center gap-3 justify-self-end rounded-xl border-2 border-white bg-transparent py-3 pl-2 text-lg text-white hover:bg-white hover:text-[#BE2E58]",
            )}
          >
            <LogOut className="group-hover:stroke-[#BE2E58]" />
            Log Out
          </ServerButton>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
