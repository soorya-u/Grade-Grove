"use client";

import { Rubik, Poppins } from "next/font/google";

import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Skeleton } from "@/components/ui/skeleton";

import { getSemResults } from "@/lib/axios";

import { Rankers } from "@/interface";
import { cn } from "@/lib/utils";
import Link from "next/link";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });

function SemTable({ semester }: { semester: string }) {
  const [result, setResult] = useState<Rankers>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSemResults(semester).then((res) => {
      setResult(res.data);
      setLoading(false);
      console.log("22222");
    });
  }, []);
  return (
    <>
      <Table>
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
                "hidden md:table-cell text-center text-base",
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
                "hidden md:table-cell text-center text-base",
              )}
            >
              SGPA
            </TableHead>
          </TableRow>
        </TableHeader>
        {!loading ? (
          <TableBody>
            {result.map((elem, idx) => (
              <TableRow key={elem._id}>
                <TableCell
                  className={cn(
                    rubik.className,
                    "font-medium text-center text-base",
                  )}
                >
                  {idx + 1}
                </TableCell>
                <TableCell
                  className={cn(
                    rubik.className,
                    "text-center cursor-pointer text-base",
                  )}
                  style={{
                    fontStyle: "italic",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                  }}
                >
                  <Link href={`/${semester}/${elem.usn}`}>{elem.name}</Link>
                </TableCell>
                <TableCell
                  className={cn(
                    rubik.className,
                    "hidden md:table-cell text-center text-base",
                  )}
                >
                  {elem.usn}
                </TableCell>
                <TableCell
                  className={cn(rubik.className, "text-center text-base")}
                >
                  {elem.total}
                </TableCell>
                <TableCell
                  className={cn(
                    rubik.className,
                    "hidden md:table-cell text-center text-base",
                  )}
                >
                  {elem.spga}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {Array(10)
              .fill(0)
              .map((elem, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <Skeleton className="m-auto w-16 sm:w-20 lg:w-28 h-[20px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="m-auto w-16 sm:w-20 lg:w-28 h-[20px]" />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Skeleton className="m-auto w-16 sm:w-20 lg:w-28 h-[20px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="m-auto w-16 sm:w-20 lg:w-28 h-[20px]" />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Skeleton className="m-auto w-16 sm:w-20 lg:w-28 h-[20px]" />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        )}
      </Table>
    </>
  );
}

export default SemTable;
