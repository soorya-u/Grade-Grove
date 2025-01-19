import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ILink } from "@/types/link";
import { auth } from "@/lib/auth";

import HamburgerUserCard from "../user-card/hamburger-user-card";
import HamburgerLink from "./hamburger-link";

export default async function Hamburger({ className }: { className: string }) {
  const session = await auth();

  return (
    <Sheet>
      <SheetTrigger className={className}>
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#00000040] backdrop-blur-sm">
        <div className="mt-10 flex min-h-[80vh] flex-col justify-start gap-6">
          {["Semester", "Changelog"].map((link, idx) => (
            <HamburgerLink link={link as ILink} key={idx} />
          ))}
          {session && session.user ? (
            <HamburgerUserCard
              name={session.user.name}
              imageLink={session.user.image}
            />
          ) : (
            <>
              {["Login", "Sign Up"].map((link, idx) => (
                <HamburgerLink link={link as ILink} key={idx} />
              ))}
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
