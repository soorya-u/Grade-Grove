"use client";

import { ColumnDef } from "@tanstack/react-table";

import { IResultPayload } from "@/interface/result";

import { sortedTableHeader, unsortedTableHeader } from "./TableHeaders";

export const columns: ColumnDef<IResultPayload>[] = [
  {
    accessorKey: "rank",
    header: ({ column }) => sortedTableHeader({ column, name: "Rank" }),
  },
  {
    accessorKey: "studentName",
    header: ({ column }) =>
      unsortedTableHeader({ column, name: "Student Name" }),
  },
  {
    accessorKey: "usn",
    header: ({ column }) => unsortedTableHeader({ column, name: "USN" }),
  },
  {
    accessorKey: "totalMarks",
    header: ({ column }) => sortedTableHeader({ column, name: "Total Marks" }),
  },
  {
    accessorKey: "sgpa",
    header: ({ column }) => unsortedTableHeader({ column, name: "SGPA" }),
  },
];
