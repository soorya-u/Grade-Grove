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
          <Link
            href="/semester"
            className={cn(
              quicksand.className,
              "text-lg hover:text-white",
              pathname === "/semester" ? "text-white" : "text-[#ccccd2]",
            )}
          >
            Semester
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/changelog"
            className={cn(
              quicksand.className,
              "text-lg hover:text-white",
              pathname === "/changelog" ? "text-white" : "text-[#ccccd2]",
            )}
          >
            Changelog
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigator;
