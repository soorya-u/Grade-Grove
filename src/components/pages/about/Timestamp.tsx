import Link from "next/link";
import { Rubik } from "next/font/google";

import { cn } from "@/utils/shadcn";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });

function Timestamp({
  name,
  date,
  href,
}: {
  name: string;
  date: Date;
  href: string;
}) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="w-0 flex-1">
          <div className="flex items-center space-x-4">
            <Link
              className={cn(
                rubik.className,
                "font-semibold text-2xl text-white hover:text-[#f64444] transition-[color] duration-150 ease-linear"
              )}
              href={href}
            >
              {name}
            </Link>
          </div>
        </div>
        <h4 className={cn(rubik.className, "text-lg text-white")}>
          {date.toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h4>
      </div>
    </>
  );
}

export default Timestamp;
