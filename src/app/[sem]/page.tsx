import { Poppins } from "next/font/google";

import { Result as ResultService } from "@/services/result";

import SemTable from "@/components/pages/semester/SemTable";
import { columns } from "@/components/pages/semester/columns";

import getOrdinalSemester from "@/utils/custom/getOrdinalSemester";
import { cn } from "@/utils/shadcn";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

async function Result({ params }: { params: { sem: string } }) {
  const payload = await ResultService.getResult(params.sem);
  return (
    <>
      <h1 className={cn(poppins.className, "px-4 text-center text-3xl")}>
        {getOrdinalSemester(params.sem)} Semester Top 10 List
      </h1>
      <SemTable columns={columns} semester={params.sem} data={payload} />
    </>
  );
}

export default Result;
