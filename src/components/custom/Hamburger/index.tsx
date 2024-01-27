"use client";

import Link from "next/link";
import { Quicksand } from "next/font/google";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faGraduationCap,
  faCircleInfo,
  faChartColumn,
  fa1,
  fa2,
  fa3,
} from "@fortawesome/free-solid-svg-icons";

const quicksand = Quicksand({ weight: "600", subsets: ["latin"] });

function Hamburger({ className }: { className: string }) {
  return (
    <>
      <Sheet>
        <SheetTrigger className={className}>
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className={cn("bg-[#00000040] backdrop-blur-sm")}
        >
          <div className="flex flex-col justify-center gap-6 mt-10">
            <Link
              href="/"
              onClick={() =>
                document.getElementById("sheet-close-button")?.click()
              }
              className={cn(
                quicksand.className,
                "text-lg w-full flex items-center gap-3 border-2 border-white py-3 px-2 rounded-xl",
              )}
            >
              <FontAwesomeIcon icon={faHome} className="text-2xl pr-1" />
              <p>Home</p>
            </Link>

            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg w-full flex justify-start items-center gap-3 border-2 border-white py-3 px-2 rounded-xl">
                  <FontAwesomeIcon
                    icon={faChartColumn}
                    className="text-2xl pr-1"
                  />
                  <p>Results</p>
                </AccordionTrigger>
                <AccordionContent className="mt-5">
                  {[
                    { link: "first", title: "First", icon: fa1 },
                    { link: "second", title: "Second", icon: fa2 },
                    { link: "third", title: "Third", icon: fa3 },
                  ].map((elem, idx) => (
                    <Link
                      key={idx}
                      href={`/${elem.link}-sem`}
                      onClick={() =>
                        document.getElementById("sheet-close-button")?.click()
                      }
                      className={cn(
                        quicksand.className,
                        "text-lg flex items-center gap-3 border-2 border-white py-3 px-4 rounded-xl my-3 ml-4",
                      )}
                    >
                      <p>{elem.title} Sem</p>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="/department"
              onClick={() =>
                document.getElementById("sheet-close-button")?.click()
              }
              className={cn(
                quicksand.className,
                "text-lg w-full flex items-center gap-3 border-2 border-white py-3 px-2 rounded-xl",
              )}
            >
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-2xl pr-1"
              />
              <p>Department</p>
            </Link>
            <Link
              href="/about"
              onClick={() =>
                document.getElementById("sheet-close-button")?.click()
              }
              className={cn(
                quicksand.className,
                "text-lg w-full flex items-center gap-3 border-2 border-white py-3 px-2 rounded-xl",
              )}
            >
              <FontAwesomeIcon icon={faCircleInfo} className="text-2xl pr-1" />
              <p>About</p>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Hamburger;
