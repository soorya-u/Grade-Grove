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
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#00000040] backdrop-blur-sm">
        <div className="mt-10 flex min-h-[80vh] flex-col justify-between gap-6">
          <div className="flex flex-col gap-6">
            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className={cn(
                    quicksand.className,
                    "flex w-full items-center justify-start gap-3 rounded-xl border-2 border-white px-2 py-3 text-lg",
                    pathname.includes("sem")
                      ? "bg-white text-[#BE2E58]"
                      : "bg-transparent text-white",
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
                        ? "h-8 w-8 [&_path]:fill-[#BE2E58]"
                        : "[&_path]:fill-[#fff]",
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
                          "my-3 ml-4 flex w-[90%] items-center gap-3 rounded-xl border-2 border-white py-3 pl-2 text-lg",
                          pathname === `/${link}-sem`
                            ? "bg-white text-[#BE2E58]"
                            : "bg-transparent text-white",
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
                  "flex w-full items-center gap-3 rounded-xl border-2 border-white px-2 py-3 text-lg",
                  pathname === "/about"
                    ? "bg-white text-[#BE2E58]"
                    : "bg-transparent text-white",
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
              className="ml-2 self-start"
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
                    "flex w-full items-center gap-3 rounded-xl border-2 border-white px-2 py-3 text-lg",
                    pathname === "/auth/signup"
                      ? "bg-white text-[#BE2E58]"
                      : "bg-transparent text-white",
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
                    "flex w-full items-center gap-3 rounded-xl border-2 border-white px-2 py-3 text-lg",
                    pathname === "/auth/login"
                      ? "bg-white text-[#BE2E58]"
                      : "bg-transparent text-white",
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
