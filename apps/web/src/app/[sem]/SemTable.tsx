"use client";

import { Rubik, Poppins } from "next/font/google";

import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getSemResults } from "@/lib/axios";

import { IRankers } from "@/interface";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Loading from "./loading";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });

function SemTable({ semester }: { semester: string }) {
  const [result, setResult] = useState<IRankers>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSemResults(semester)
      .then((res) => setResult(res.data))
      .finally(() => setLoading(false));
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
                  <Link
                    href={{
                      pathname: `/${semester}/${elem.usn}`,
                      query: { rank: idx + 1 },
                    }}
                  >
                    {elem.name}
                  </Link>
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
                <Loading key={idx} />
              ))}
          </TableBody>
        )}
      </Table>
    </>
  );
}

export default SemTable;
