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

function Navigator() {
  return (
    <>
      <NavigationMenu className="w-1/2">
        <NavigationMenuList className="w-full gap-[4.2rem] flex-shrink-0">
          <NavigationMenuItem>
            <Link href="/" className={cn(quicksand.className, "text-lg")}>
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(quicksand.className, "text-lg ")}
            >
              Result
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
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
                    <Link href={`/result/${elem.link}-sem`}>
                      {elem.title} Sem
                    </Link>
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
