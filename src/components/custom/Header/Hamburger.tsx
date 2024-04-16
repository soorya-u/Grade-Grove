"use client";

import Link from "next/link";
import { Quicksand } from "next/font/google";
import { Audiowide } from "next/font/google";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/shadcn/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/accordion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faCircleInfo,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import { ChevronDown } from "lucide-react";

import { cn } from "@/utils/shadcn";

import getOrdinalSemester from "@/utils/custom/getOrdinalSemester";

const quicksand = Quicksand({ weight: "600", subsets: ["latin"] });
const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

function Hamburger({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className={className}>
        <FontAwesomeIcon icon={faBars} className="text-3xl" />
      </SheetTrigger>
      <SheetContent side="left" className={`bg-[#00000040] backdrop-blur-sm`}>
        <div className="flex flex-col justify-center gap-6 mt-10">
          <SheetClose asChild>
            <Link
              href="/"
              className={cn(
                audiowide.className,
                "text-2xl text-nowrap self-center mb-6"
              )}
            >
              Grade Grove
            </Link>
          </SheetClose>

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
                <FontAwesomeIcon
                  icon={faChartColumn}
                  className={cn(
                    "w-6 pr-1",
                    pathname.includes("sem")
                      ? "[&_path]:fill-[#BE2E58]"
                      : "[&_path]:fill-[#fff]"
                  )}
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
              <FontAwesomeIcon
                icon={faCircleInfo}
                className={cn(
                  "w-6 pr-1",
                  pathname === `/about`
                    ? "[&_path]:fill-[#BE2E58]"
                    : "[&_path]:fill-[#fff]"
                )}
              />
              About
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Hamburger;
