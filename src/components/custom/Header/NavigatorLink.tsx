"use client";

import Link from "next/link";
import { Quicksand } from "next/font/google";
import { usePathname } from "next/navigation";

import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { cn } from "@/utils/cn";

const quicksand = Quicksand({ weight: "600", subsets: ["latin"] });

export default function NavigatorLink({ link }: { link: string }) {
  const pathname = usePathname();
  const route = link.toLowerCase();
  return (
    <NavigationMenuItem>
      <Link
        href={`/${route}`}
        className={cn(
          quicksand.className,
          "text-lg hover:text-white",
          pathname === `/${route}` ? "text-white" : "text-[#ccccd2]",
        )}
      >
        {link}
      </Link>
    </NavigationMenuItem>
  );
}
