"use client";

import Link from "next/link";
import { Quicksand } from "next/font/google";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const quicksand = Quicksand({ weight: "600", subsets: ["latin"] });

function Navigator({ className }: { className: string }) {
  return (
    <>
      <NavigationMenu className={cn("w-1/2", className)}>
        <NavigationMenuList className="w-full gap-12 flex-shrink-0">
          <NavigationMenuItem>
            <Link href="/" className={cn(quicksand.className, "text-lg")}>
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(quicksand.className, "text-lg p-0 m-0")}
            >
              Result
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid place-items-center w-[150px] grid-cols-1 bg-transparent">
                {[
                  { link: "first", title: "First" },
                  { link: "sec", title: "Second" },
                  { link: "third", title: "Third" },
                ].map((elem, idx) => (
                  <li
                    key={idx}
                    className={cn(
                      quicksand.className,
                      "w-full text-center border-white py-1",
                      idx !== 0 && "border-t-2",
                    )}
                  >
                    <Link href={`/${elem.link}-sem`}>{elem.title} Sem</Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/department"
              className={cn(quicksand.className, "text-lg")}
            >
              Department
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" className={cn(quicksand.className, "text-lg")}>
              About
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default Navigator;
