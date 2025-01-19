"use client";

import Link from "next/link";
import { Quicksand } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";
import { SheetClose } from "@/components/ui/sheet";
import { Info, LineChart, UserCheck, UserPlus } from "lucide-react";
import { ILink } from "@/types/link";

const quicksand = Quicksand({ weight: "600", subsets: ["latin"] });

const linkMapper = {
  Semester: { icon: LineChart, route: "semester" },
  Changelog: { icon: Info, route: "changelog" },
  Login: { icon: UserCheck, route: "auth/login" },
  "Sign Up": { icon: UserPlus, route: "auth/signup" },
};

export default function HamburgerLink({ link }: { link: ILink }) {
  const pathname = usePathname();
  const route = linkMapper[link].route;
  const Icon = linkMapper[link].icon;

  return (
    <SheetClose asChild>
      <Link
        href={`/${route}`}
        className={cn(
          quicksand.className,
          "flex w-full items-center gap-3 rounded-xl border-2 border-white px-2 py-3 text-lg",
          pathname === `/${route}`
            ? "bg-white text-[#BE2E58]"
            : "bg-transparent text-white",
        )}
      >
        <Icon
          className={cn("h-6 w-6 pr-1")}
          color={pathname === `/${route}` ? "#BE2E58" : "#fff"}
        />
        {link}
      </Link>
    </SheetClose>
  );
}
