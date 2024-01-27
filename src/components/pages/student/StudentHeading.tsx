import { Poppins } from "next/font/google";

import getSuperScript from "@/utils/custom/getSuperScript";

import { cn } from "@/utils/shadcn";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

function StudentHeading({ rank, name }: { rank: number; name: string }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:gap-2 justify-center items-center px-4 gap-0">
        <h1
          className={cn(
            poppins.className,
            "text-center mb-0 mt-7 sm:my-7 text-4xl"
          )}
        >
          {rank}
          <sup className={cn(poppins.className)}>
            {getSuperScript(rank)}
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
          {name}
        </h1>
      </div>
    </>
  );
}

export default StudentHeading;
