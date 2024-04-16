import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/primitives/table";

import { Skeleton } from "@/components/primitives/skeleton";

function Loading() {
  return (
    <>
      <Skeleton className="m-auto w-[25rem] h-[30px]" />
      <Table className="w-[95vw] sm:w-[80vw]">
        <TableHeader>
          <TableRow>
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <TableCell
                  key={idx}
                  className={`${
                    (idx === 2 || idx === 4) && "hidden md:table-cell"
                  }`}
                >
                  <Skeleton className="m-auto w-16 sm:w-20 lg:w-28 h-[20px]" />
                </TableCell>
              ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(10)
            .fill(0)
            .map((_, idx) => (
              <TableRow key={idx}>
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <TableCell
                      key={idx}
                      className={`${
                        (idx === 2 || idx === 4) && "hidden md:table-cell"
                      }`}
                    >
                      <Skeleton className="m-auto w-16 sm:w-20 lg:w-28 h-[20px]" />
                    </TableCell>
                  ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Loading;
