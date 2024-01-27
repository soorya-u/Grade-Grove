import { IStudent } from "@/interface";

import { Poppins, Rubik } from "next/font/google";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });

function StudentTable({ student }: { student: IStudent | undefined }) {
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
                  "text-base text-center hidden md:table-cell",
                )}
              >
                Subject Code
              </TableHead>
              <TableHead
                className={cn(
                  poppins.className,
                  "text-base text-center hidden xs:table-cell",
                )}
              >
                Internal Assessment
              </TableHead>
              <TableHead
                className={cn(
                  poppins.className,
                  "text-base text-center hidden xs:table-cell",
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
            {student?.subjects.map((elem) => (
              <TableRow key={elem._id}>
                <TableCell
                  className={cn(rubik.className, "text-base text-center")}
                >
                  {elem.subject}
                </TableCell>
                <TableCell
                  className={cn(
                    rubik.className,
                    "text-base text-center hidden md:table-cell",
                  )}
                >
                  {elem.subject_code}
                </TableCell>
                <TableCell
                  className={cn(
                    rubik.className,
                    "text-base text-center hidden xs:table-cell",
                  )}
                >
                  {elem.int_marks}
                </TableCell>
                <TableCell
                  className={cn(
                    rubik.className,
                    "text-base text-center hidden xs:table-cell",
                  )}
                >
                  {elem.ext_marks}
                </TableCell>
                <TableCell
                  className={cn(rubik.className, "text-base text-center")}
                >
                  {elem.total_marks}
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
