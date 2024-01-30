import { Poppins } from "next/font/google";

import { cn } from "@/utils/shadcn";

import SemTable from "@/components/pages/semester/SemTable";

import { Result as ResultService } from "@/services/results";

import getSuperScript from "@/utils/custom/getSuperScript";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

async function Result({ params }: { params: { sem: string } }) {
  const [semester, payload] = await ResultService.getResult(params.sem);
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-7 before:content-[''] after:content-['']">
        <h1 className={cn(poppins.className, "px-4 text-center text-3xl")}>
          {semester}
          <sup className={cn(poppins.className)}>
            {getSuperScript(semester)}
          </sup>{" "}
          Semester Top 10 List
        </h1>
        <SemTable semester={params.sem} data={payload} />
      </main>
    </>
  );
}

export default Result;
