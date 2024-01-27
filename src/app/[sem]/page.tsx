import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import SemTable from "./SemTable";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const sem = {
  "first-sem": "First",
  "second-sem": "Second",
  "third-sem": "Third",
};

function Result({ params }: { params: { sem: string } }) {
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-7 before:content-[''] after:content-['']">
        <h1 className={cn(poppins.className, "px-4 text-center text-3xl")}>
          {sem[params.sem as keyof typeof sem]} Semester Top 10 List
        </h1>
        <SemTable semester={params.sem} />
      </main>
    </>
  );
}

export default Result;
