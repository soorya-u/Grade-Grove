"use client";

import Link from "next/link";
import { Quicksand } from "next/font/google";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/shadcn/navigation-menu";

import { cn } from "@/utils/shadcn";

import getOrdinalSemester from "@/utils/custom/getOrdinalSemester";

const quicksand = Quicksand({ weight: "600", subsets: ["latin"] });

function Navigator({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <>
      <NavigationMenu className={`w-1/2 ${className}`}>
        <NavigationMenuList className="w-full gap-12 flex-shrink-0">
          <NavigationMenuItem>
            <Link
              href="/"
              className={cn(
                quicksand.className,
                "text-lg hover:text-white",
                pathname === "/" ? "text-white" : "text-[#ccccd2]"
              )}
            >
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                quicksand.className,
                "text-lg hover:text-white m-0 p-0",
                pathname.includes("sem") ? "text-white" : "text-[#ccccd2]"
              )}
            >
              Result
            </NavigationMenuTrigger>
            <NavigationMenuContent className="backdrop-blur-none">
              <ul className="grid place-items-center w-[150px] grid-cols-1 bg-transparent divide-y-2 divide-white ">
                {["first", "second", "third", "fourth"].map((link, idx) => (
                  <li
                    key={idx}
                    className={`${quicksand.className} w-full text-center py-1`}
                  >
                    <Link href={`/${link}-sem`}>
                      {getOrdinalSemester(`${link}-sem`)} Sem
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/about"
              className={cn(
                quicksand.className,
                "text-lg hover:text-white",
                pathname === "/about" ? "text-white" : "text-[#ccccd2]"
              )}
            >
              About
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default Navigator;
