import { IStudentScores } from "@/types/student";

import { Poppins, Rubik } from "next/font/google";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/utils/cn";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });

function StudentTable({ data }: { data: IStudentScores[] }) {
  return (
    <>
      <section>
        <Table className="h-[70%] w-[100%] min-w-[250px] overflow-hidden rounded-lg border border-white shadow shadow-[#00000026]">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center text-base">Subject</TableHead>
              <TableHead
                className={cn(
                  poppins.className,
                  "hidden text-center text-base md:table-cell",
                )}
              >
                Subject Code
              </TableHead>
              <TableHead
                className={cn(
                  poppins.className,
                  "hidden text-center text-base xs:table-cell",
                )}
              >
                Internal Assessment
              </TableHead>
              <TableHead
                className={cn(
                  poppins.className,
                  "hidden text-center text-base xs:table-cell",
                )}
              >
                External Assessment
              </TableHead>
              <TableHead
                className={cn(poppins.className, "text-center text-base")}
              >
                Total Marks
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((elem, idx) => (
              <TableRow key={idx}>
                <TableCell
                  className={cn(rubik.className, "text-center text-base")}
                >
                  {elem.subjectName}
                </TableCell>
                <TableCell
                  className={cn(
                    rubik.className,
                    "hidden text-center text-base md:table-cell",
                  )}
                >
                  {elem.subjectCode}
                </TableCell>
                <TableCell
                  className={cn(
                    rubik.className,
                    "hidden text-center text-base xs:table-cell",
                  )}
                >
                  {elem.internalMarks}
                </TableCell>
                <TableCell
                  className={cn(
                    rubik.className,
                    "hidden text-center text-base xs:table-cell",
                  )}
                >
                  {elem.externalMarks}
                </TableCell>
                <TableCell
                  className={cn(rubik.className, "text-center text-base")}
                >
                  {elem.totalMarks}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
}

export default StudentTable;
