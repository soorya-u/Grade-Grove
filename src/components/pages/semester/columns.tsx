"use client";

import { useState } from "react";

import { ColumnDef } from "@tanstack/react-table";

import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/shadcn/button";

import {
  Command,
  CommandGroup,
  CommandItem,
} from "@/components/shadcn/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";

import { IResultPayload } from "@/interface/result";
import { cn } from "@/utils/shadcn";

export const columns: ColumnDef<IResultPayload>[] = [
  {
    accessorKey: "rank",
    header: ({ column }) => {
      const [open, setOpen] = useState(false);

      return (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              className="px-1 2xs:px-4"
              aria-expanded={open}
            >
              Rank
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 hidden 3xs:inline" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[175px] p-0">
            <Command>
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    if (
                      column.getIsSorted() !== false ||
                      column.getIsSorted() === "desc"
                    )
                      column.toggleSorting(false);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      column.getIsSorted() === "desc"
                        ? "opacity-0"
                        : "opacity-100"
                    )}
                  />
                  Ascending Order
                </CommandItem>
                <CommandItem
                  className="border-white border-t-2"
                  onSelect={() => {
                    if (
                      column.getIsSorted() === false ||
                      column.getIsSorted() !== "desc"
                    )
                      column.toggleSorting(true);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      column.getIsSorted() === "desc"
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  Descending Order
                </CommandItem>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      );
    },
  },
  {
    accessorKey: "studentName",
    header: ({ column }) => {
      const [open, setOpen] = useState(false);

      return (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              className="px-1 2xs:px-4"
              aria-expanded={open}
            >
              Student Name
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 hidden 3xs:inline" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[175px] p-0">
            <Command>
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    column.toggleSorting(false);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      column.getIsSorted() === "asc"
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  Ascending Order
                </CommandItem>
                <CommandItem
                  className="border-white border-t-2"
                  onSelect={() => {
                    column.toggleSorting(true);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      column.getIsSorted() === "desc"
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  Descending Order
                </CommandItem>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      );
    },
  },
  {
    accessorKey: "usn",
    header: ({ column }) => {
      const [open, setOpen] = useState(false);

      return (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              className="px-1 2xs:px-4"
              aria-expanded={open}
            >
              USN
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 hidden 3xs:inline" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[175px] p-0">
            <Command className="bg-transparent">
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    column.toggleSorting(false);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      column.getIsSorted() === "asc"
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  Ascending Order
                </CommandItem>
                <CommandItem
                  className="border-white border-t-2"
                  onSelect={() => {
                    column.toggleSorting(true);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      column.getIsSorted() === "desc"
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  Descending Order
                </CommandItem>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      );
    },
  },
  {
    accessorKey: "totalMarks",
    header: ({ column }) => {
      const [open, setOpen] = useState(false);

      return (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              className="px-1 2xs:px-4"
              aria-expanded={open}
            >
              Total Marks
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 hidden 3xs:inline" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[175px] p-0">
            <Command>
              <CommandGroup>
                <CommandItem
                  className="border-white border-b-2"
                  onSelect={() => {
                    if (
                      column.getIsSorted() !== false ||
                      column.getIsSorted() === "desc"
                    )
                      column.toggleSorting(false);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      column.getIsSorted() === "desc"
                        ? "opacity-0"
                        : "opacity-100"
                    )}
                  />
                  Ascending Order
                </CommandItem>
                <CommandItem
                  onSelect={() => {
                    if (
                      column.getIsSorted() === false ||
                      column.getIsSorted() !== "desc"
                    )
                      column.toggleSorting(true);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      column.getIsSorted() === "desc"
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  Descending Order
                </CommandItem>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      );
    },
  },
  {
    accessorKey: "sgpa",
    header: ({ column }) => {
      const [open, setOpen] = useState(false);

      return (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              className="px-1 2xs:px-4"
              aria-expanded={open}
            >
              SGPA
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 hidden 3xs:inline" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[175px] p-0">
            <Command>
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    column.toggleSorting(false);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      column.getIsSorted() === "asc"
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  Ascending Order
                </CommandItem>
                <CommandItem
                  className="border-white border-t-2"
                  onSelect={() => {
                    column.toggleSorting(true);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      column.getIsSorted() === "desc"
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  Descending Order
                </CommandItem>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      );
    },
  },
];
