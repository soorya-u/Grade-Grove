import { Poppins } from "next/font/google";

import prismaClient from "@/lib/db";
import { cn } from "@/utils/cn";
import getSuperScript from "@/utils/getSuperScript";
import Link from "next/link";
import getSemesterRoute from "@/utils/getSemesterRoute";
import { getSemesterDetails } from "@/server/semester";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default async function SemesterPage() {
  const semesters = await getSemesterDetails();

  return (
    <section className="flex w-full flex-col items-center justify-start gap-7">
      <h1 className={cn(poppins.className, "px-4 text-center text-5xl")}>
        Semesters
      </h1>

      <div className="container grid grid-cols-1 gap-6 px-4 py-7 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:px-6 lg:grid-cols-4">
        {semesters.map((sem, idx) => (
          <Link
            key={idx}
            href={`/semester/${getSemesterRoute(+sem.semesterNumber)}`}
          >
            <div className="group cursor-pointer overflow-hidden rounded-lg border-2 border-white hover:border-[#931D68] hover:bg-white/90">
              <div className="flex flex-col items-center justify-center gap-4 p-6">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h1
                    className={cn(
                      poppins.className,
                      "mb-0 text-center text-4xl group-hover:text-[#931D68]",
                    )}
                  >
                    {sem.semesterNumber[0]}
                    <sup
                      className={
                        (cn(poppins.className), "group-hover:text-[#931D68]")
                      }
                    >
                      {getSuperScript(+sem.semesterNumber)}
                    </sup>{" "}
                    Semester
                  </h1>

                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-lg font-medium tracking-tight group-hover:text-[#931D68]">
                      Credits: {sem.semesterCredits}
                    </h3>
                    <h3 className="text-lg font-medium tracking-tight group-hover:text-[#931D68]">
                      Number of Subjects: {sem.noOfSubjects}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className={`cursor-not-allowed overflow-hidden rounded-lg border-2 border-white bg-[#00000030] opacity-70`}
            >
              <div className="flex flex-col items-center justify-center gap-4 p-6">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h1
                    className={cn(
                      poppins.className,
                      "mb-0 text-center text-4xl",
                    )}
                  >
                    {idx + 5}
                    <sup className={cn(poppins.className)}>
                      {getSuperScript(4)}
                    </sup>{" "}
                    Semester
                  </h1>

                  <h3 className="text-lg font-medium tracking-tight">
                    Yet to be Announced
                  </h3>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
