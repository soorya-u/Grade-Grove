import { Rubik, Poppins } from "next/font/google";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";

import { cn } from "@/utils/shadcn";

import { IResultPayload } from "@/interface/result";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });

async function SemTable({
  semester,
  data,
}: {
  semester: string;
  data: IResultPayload[];
}) {
  return (
    <>
      <Table className="w-[95vw] sm:w-[80vw]">
        <TableHeader>
          <TableRow>
            <TableHead
              className={cn(poppins.className, "text-base text-center")}
            >
              Rank
            </TableHead>
            <TableHead
              className={cn(poppins.className, "text-center text-base")}
            >
              Student Name
            </TableHead>
            <TableHead
              className={cn(
                poppins.className,
                "hidden md:table-cell text-center text-base"
              )}
            >
              USN
            </TableHead>
            <TableHead
              className={cn(poppins.className, "text-center text-base")}
            >
              Total Marks
            </TableHead>
            <TableHead
              className={cn(
                poppins.className,
                "hidden md:table-cell text-center text-base"
              )}
            >
              SGPA
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((elem, idx) => (
            <TableRow key={idx}>
              <TableCell
                className={cn(
                  rubik.className,
                  "font-medium text-center text-base"
                )}
              >
                {idx + 1}
              </TableCell>
              <TableCell
                className={cn(
                  rubik.className,
                  "text-center cursor-pointer text-base"
                )}
                style={{
                  fontStyle: "italic",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                <Link href={`/${semester}/${elem.usn}`}>
                  {elem.studentName}
                </Link>
              </TableCell>
              <TableCell
                className={cn(
                  rubik.className,
                  "hidden md:table-cell text-center text-base"
                )}
              >
                {elem.usn}
              </TableCell>
              <TableCell
                className={cn(rubik.className, "text-center text-base")}
              >
                {elem.totalMarks}
              </TableCell>
              <TableCell
                className={cn(
                  rubik.className,
                  "hidden md:table-cell text-center text-base"
                )}
              >
                {elem.sgpa}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default SemTable;
