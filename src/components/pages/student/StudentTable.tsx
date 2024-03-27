import { IStudentScores } from "@/types/student";

import { Poppins, Rubik } from "next/font/google";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";

import { cn } from "@/utils/shadcn";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });

function StudentTable({ data }: { data: IStudentScores[] }) {
  return (
    <>
      <section>
        <Table className="min-w-[250px] w-[100%] h-[70%] border border-white rounded-lg overflow-hidden shadow shadow-[#00000026]">
          <TableHeader>
            <TableRow>
              <TableHead className="text-base text-center">Subject</TableHead>
              <TableHead
                className={cn(
                  poppins.className,
                  "text-base text-center hidden md:table-cell"
                )}
              >
                Subject Code
              </TableHead>
              <TableHead
                className={cn(
                  poppins.className,
                  "text-base text-center hidden xs:table-cell"
                )}
              >
                Internal Assessment
              </TableHead>
              <TableHead
                className={cn(
                  poppins.className,
                  "text-base text-center hidden xs:table-cell"
                )}
              >
                External Assessment
              </TableHead>
              <TableHead
                className={cn(poppins.className, "text-base text-center")}
              >
                Total Marks
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((elem, idx) => (
              <TableRow key={idx}>
                <TableCell
                  className={cn(rubik.className, "text-base text-center")}
                >
                  {elem.subjectName}
                </TableCell>
                <TableCell
                  className={cn(
                    rubik.className,
                    "text-base text-center hidden md:table-cell"
                  )}
                >
                  {elem.subjectCode}
                </TableCell>
                <TableCell
                  className={cn(
                    rubik.className,
                    "text-base text-center hidden xs:table-cell"
                  )}
                >
                  {elem.internalMarks}
                </TableCell>
                <TableCell
                  className={cn(
                    rubik.className,
                    "text-base text-center hidden xs:table-cell"
                  )}
                >
                  {elem.externalMarks}
                </TableCell>
                <TableCell
                  className={cn(rubik.className, "text-base text-center")}
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
