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
} from "@/components/primitives/navigation-menu";

import { cn } from "@/utils/cn";

import getOrdinalSemester from "@/utils/getOrdinalSemester";

const quicksand = Quicksand({ weight: "600", subsets: ["latin"] });

function Navigator({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <NavigationMenu className={`w-1/2 ${className}`}>
      <NavigationMenuList className="w-full flex-shrink-0 gap-8">
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              quicksand.className,
              "m-0 p-0 text-lg hover:text-white",
              pathname.includes("sem") ? "text-white" : "text-[#ccccd2]",
            )}
          >
            Result
          </NavigationMenuTrigger>
          <NavigationMenuContent className="backdrop-blur-none">
            <ul className="grid w-[150px] grid-cols-1 place-items-center divide-y-2 divide-white bg-transparent ">
              {["first", "second", "third", "fourth"].map((link, idx) => (
                <li
                  key={idx}
                  className={`${quicksand.className} w-full py-1 text-center`}
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
              pathname === "/about" ? "text-white" : "text-[#ccccd2]",
            )}
          >
            About
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigator;
