"use client";

import { useState } from "react";

import { Column } from "@tanstack/react-table";

import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Command,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { IResultPayload } from "@/types/result";

import { cn } from "@/utils/cn";

export const sortedTableHeader = ({
  column,
  name,
}: {
  column: Column<IResultPayload, unknown>;
  name: string;
}) => {
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
          {name}
          <ChevronsUpDown className="ml-2 hidden h-4 w-4 shrink-0 opacity-50 3xs:inline" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[175px] p-0">
        <Command>
          <CommandGroup className="divide-y-2 divide-white">
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
                  column.getIsSorted() === "desc" ? "opacity-0" : "opacity-100",
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
                  column.getIsSorted() === "desc" ? "opacity-100" : "opacity-0",
                )}
              />
              Descending Order
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export const unsortedTableHeader = ({
  column,
  name,
}: {
  column: Column<IResultPayload, unknown>;
  name: string;
}) => {
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
          {name}
          <ChevronsUpDown className="ml-2 hidden h-4 w-4 shrink-0 opacity-50 3xs:inline" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[175px] p-0">
        <Command className="bg-transparent">
          <CommandGroup className="divide-y-2 divide-white">
            <CommandItem
              onSelect={() => {
                column.toggleSorting(false);
                setOpen(false);
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  column.getIsSorted() === "asc" ? "opacity-100" : "opacity-0",
                )}
              />
              Ascending Order
            </CommandItem>
            <CommandItem
              onSelect={() => {
                column.toggleSorting(true);
                setOpen(false);
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  column.getIsSorted() === "desc" ? "opacity-100" : "opacity-0",
                )}
              />
              Descending Order
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
