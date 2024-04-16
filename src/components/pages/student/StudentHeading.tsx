import { Poppins } from "next/font/google";

import getSuperScript from "@/utils/getSuperScript";

import { cn } from "@/utils/cn";

import { IStudentHeading } from "@/types/student";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

function StudentHeading({ data }: { data: IStudentHeading }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:gap-2 justify-center items-center px-4 gap-0">
        <h1
          className={cn(
            poppins.className,
            "text-center mb-0 mt-7 sm:my-7 text-4xl"
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
            "text-center  mt-0 mb-7 sm:my-7 text-4xl"
          )}
        >
          {data.name}
        </h1>
      </div>
    </>
  );
}

export default StudentHeading;
