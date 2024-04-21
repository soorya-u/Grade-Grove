"use client";

import Link from "next/link";
import { Quicksand } from "next/font/google";
import { usePathname } from "next/navigation";

import { useSession } from "next-auth/react";

import { Menu, Info, LineChart, UserPlus, UserCheck } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/primitives/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/primitives/accordion";

import { ChevronDown } from "lucide-react";

import { cn } from "@/utils/cn";

import getOrdinalSemester from "@/utils/getOrdinalSemester";
import UserCard from "../UserCard";

const quicksand = Quicksand({ weight: "600", subsets: ["latin"] });

function Hamburger({ className }: { className: string }) {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <Sheet>
      <SheetTrigger className={className}>
        <Menu className="w-8 h-8" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#00000040] backdrop-blur-sm">
        <div className="flex flex-col justify-between gap-6 mt-10 min-h-[88vh]">
          <div className="flex flex-col gap-6">
            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className={cn(
                    quicksand.className,
                    "text-lg w-full flex justify-start items-center gap-3 border-2 border-white py-3 px-2 rounded-xl",
                    pathname.includes("sem")
                      ? "bg-white text-[#BE2E58]"
                      : "bg-transparent text-white"
                  )}
                >
                  <LineChart
                    className={cn("h-6 w-6 pr-1")}
                    color={pathname.includes("sem") ? "#BE2E58" : "#fff"}
                  />
                  Results
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform duration-200",
                      pathname.includes("sem")
                        ? "[&_path]:fill-[#BE2E58] h-8 w-8"
                        : "[&_path]:fill-[#fff]"
                    )}
                  />
                </AccordionTrigger>
                <AccordionContent className="mt-5">
                  {["first", "second", "third", "fourth"].map((link, idx) => (
                    <SheetClose key={idx} asChild>
                      <Link
                        href={`/${link}-sem`}
                        className={cn(
                          quicksand.className,
                          "text-lg w-[90%] flex items-center gap-3 border-2 border-white py-3 pl-2 rounded-xl my-3 ml-4",
                          pathname === `/${link}-sem`
                            ? "bg-white text-[#BE2E58]"
                            : "bg-transparent text-white"
                        )}
                      >
                        {getOrdinalSemester(`${link}-sem`)} Sem
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <SheetClose asChild>
              <Link
                href="/about"
                className={cn(
                  quicksand.className,
                  "text-lg w-full flex items-center gap-3 border-2 border-white py-3 px-2 rounded-xl",
                  pathname === "/about"
                    ? "bg-white text-[#BE2E58]"
                    : "bg-transparent text-white"
                )}
              >
                <Info
                  className={cn("h-6 w-6 pr-1")}
                  color={pathname === `/about` ? "#BE2E58" : "#fff"}
                />
                About
              </Link>
            </SheetClose>
          </div>
          {session && session.user ? (
            <UserCard
              className="self-start ml-2"
              name={session.user.name}
              imageLink={session.user.image}
            />
          ) : (
            <div className="flex flex-col gap-6 justify-self-end xss:hidden">
              <SheetClose className="justify-self-end" asChild>
                <Link
                  href="/auth/signup"
                  className={cn(
                    quicksand.className,
                    "text-lg w-full flex items-center gap-3 border-2 border-white py-3 px-2 rounded-xl",
                    pathname === "/auth/signup"
                      ? "bg-white text-[#BE2E58]"
                      : "bg-transparent text-white"
                  )}
                >
                  <UserPlus
                    className={cn("h-6 w-6 pr-1")}
                    color={pathname === "/auth/signup" ? "#BE2E58" : "#fff"}
                  />
                  Sign Up
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/auth/login"
                  className={cn(
                    quicksand.className,
                    "text-lg w-full flex items-center gap-3 border-2 border-white py-3 px-2 rounded-xl",
                    pathname === "/auth/login"
                      ? "bg-white text-[#BE2E58]"
                      : "bg-transparent text-white"
                  )}
                >
                  <UserCheck
                    className={cn("h-6 w-6 pr-1")}
                    color={pathname === "/auth/login" ? "#BE2E58" : "#fff"}
                  />
                  Login
                </Link>
              </SheetClose>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Hamburger;
