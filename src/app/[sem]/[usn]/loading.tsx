import { Skeleton } from "@/components/primitives/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/primitives/table";

function Loading() {
  return (
    <>
      <Skeleton className="mx-auto mb-5 h-[40px] w-[80%] sm:w-[25rem]" />
      <section className="flex w-full flex-col items-center justify-center gap-28 bg-transparent px-4 xl:flex-row">
        <section className="min-h-[375px] w-1/4 min-w-[250px] rounded-[0.45rem] border border-white bg-[#00000026] p-4 shadow shadow-[#00000026] sm:min-w-[400px]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-6">
            <Skeleton className="aspect-square h-[60%] w-[60%] rounded-full" />

            <div className="grid grid-cols-2 gap-4">
              {Array(8)
                .fill(0)
                .map((_, idx) => (
                  <Skeleton key={idx} className="h-6 w-24 sm:w-32" />
                ))}
            </div>
          </div>
        </section>

        <Table className="h-[70%] w-[100%] min-w-[250px] overflow-hidden rounded-lg border border-white shadow shadow-[#00000026]">
          <TableHeader>
            <TableRow>
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <TableCell
                    key={idx}
                    className={`${idx === 1 && "hidden md:table-cell"} ${
                      (idx === 2 || idx === 3) && "hidden xs:table-cell"
                    }`}
                  >
                    <Skeleton className="mx-4 h-[25px] w-16 sm:w-20 md:mx-8 lg:w-32" />
                  </TableCell>
                ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(9)
              .fill(0)
              .map((_, idx) => (
                <TableRow key={idx}>
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <TableCell
                        key={idx}
                        className={`${idx === 1 && "hidden md:table-cell"} ${
                          (idx === 2 || idx === 3) && "hidden xs:table-cell"
                        }`}
                      >
                        <Skeleton className="mx-4 h-[25px] w-16 sm:w-20 md:mx-8 lg:w-32" />
                      </TableCell>
                    ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
}

export default Loading;
