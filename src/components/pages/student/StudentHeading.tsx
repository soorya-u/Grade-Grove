import { Poppins } from "next/font/google";

import getSuperScript from "@/utils/getSuperScript";

import { cn } from "@/utils/cn";

import { IStudentHeading } from "@/types/student";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

function StudentHeading({ data }: { data: IStudentHeading }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-0 px-4 sm:flex-row sm:gap-2">
        <h1
          className={cn(
            poppins.className,
            "mb-0 mt-7 text-center text-4xl sm:my-7",
          )}
        >
          {data.rank}
          <sup className={cn(poppins.className)}>
            {getSuperScript(data.rank)}
          </sup>{" "}
          Rank
          <span className={cn(poppins.className, "hidden sm:inline")}> - </span>
        </h1>
        <h1
          className={cn(
            poppins.className,
            "mb-7  mt-0 text-center text-4xl sm:my-7",
          )}
        >
          {data.name}
        </h1>
      </div>
    </>
  );
}

export default StudentHeading;
