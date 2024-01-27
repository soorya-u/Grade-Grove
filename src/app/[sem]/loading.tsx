import { TableCell, TableRow } from "@/components/shadcn/table";

import { Skeleton } from "@/components/shadcn/skeleton";

function Loading() {
  return (
    <>
      <TableRow>
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
    </>
  );
}

export default Loading;
