import { Metadata } from "next/types";
import { Poppins } from "next/font/google";

import { cn } from "@/utils/shadcn";

import SemTable from "@/components/pages/semester/SemTable";
import { columns } from "@/components/pages/semester/columns";

import { Result as ResultService } from "@/services/result";

import getOrdinalSemester from "@/utils/custom/getOrdinalSemester";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { sem: string };
}): Promise<Metadata> {
  const semester = `${getOrdinalSemester(params.sem)} Semester`;

  return {
    title: `${semester} | Elite AIML`,
    description: `Explore comprehensive ${semester} results for all students. Easily scores and GPAs enhancing transparency and communication within the educational institution.`,
    authors: [
      {
        name: "Soorya U",
        url: "https://github.com/soorya-u/",
      },
    ],
  };
}

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
