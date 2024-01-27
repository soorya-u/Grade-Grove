import Link from "next/link";
import { Quicksand } from "next/font/google";

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
        <SheetContent side="left" className={`bg-[#00000040] backdrop-blur-sm`}>
          <div className="flex flex-col justify-center gap-6 mt-10">
            <SheetClose asChild>
              <Link
                href="/"
                className={`${quicksand.className} text-lg w-full flex items-center gap-3 border-2 border-white py-3 px-2 rounded-xl`}
              >
                <FontAwesomeIcon icon={faHome} className="text-2xl pr-1" />
                <p>Home</p>
              </Link>
            </SheetClose>

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
                    <SheetClose asChild>
                      <Link
                        key={idx}
                        href={`/${elem.link}-sem`}
                        className={`
                      ${quicksand.className} text-lg flex items-center gap-3 border-2 border-white py-3 px-4 rounded-xl my-3 ml-4`}
                      >
                        <p>{elem.title} Sem</p>
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <SheetClose asChild>
              <Link
                href="/department"
                className={`${quicksand.className} text-lg w-full flex items-center gap-3 border-2 border-white py-3 px-2 rounded-xl`}
              >
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-2xl pr-1"
                />
                <p>Department</p>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/about"
                className={`${quicksand.className} text-lg w-full flex items-center gap-3 border-2 border-white py-3 px-2 rounded-xl`}
              >
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-2xl pr-1"
                />
                <p>About</p>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Hamburger;
