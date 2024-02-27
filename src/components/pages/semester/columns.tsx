"use client";

import { ColumnDef } from "@tanstack/react-table";

import { IResultPayload } from "@/interface/result";

import { sortedTableHeader, unsortedTableHeader } from "./TableHeaders";

export const columns: ColumnDef<IResultPayload>[] = [
  {
    accessorKey: "rank",
    header: sortedTableHeader,
  },
  {
    accessorKey: "studentName",
    header: unsortedTableHeader,
  },
  {
    accessorKey: "usn",
    header: unsortedTableHeader,
  },
  {
    accessorKey: "totalMarks",
    header: sortedTableHeader,
  },
  {
    accessorKey: "sgpa",
    header: unsortedTableHeader,
  },
];
