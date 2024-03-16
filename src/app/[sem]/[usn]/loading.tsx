import { Skeleton } from "@/components/shadcn/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";

function Loading() {
  return (
    <>
      <Skeleton className="mx-auto w-[80%] sm:w-[25rem] h-[40px] mb-5" />
      <section className="w-full flex flex-col xl:flex-row justify-center items-center bg-transparent px-4 gap-28">
        <section className="w-1/4 min-w-[250px] sm:min-w-[400px] min-h-[375px] bg-[#00000026] border border-white rounded-[0.45rem] shadow shadow-[#00000026] p-4">
          <div className="w-full h-full flex flex-col justify-center items-center gap-6">
            <Skeleton className="h-[60%] w-[60%] rounded-full aspect-square" />

            <div className="grid grid-cols-2 gap-4">
              {Array(8)
                .fill(0)
                .map((_, idx) => (
                  <Skeleton key={idx} className="w-24 sm:w-32 h-6" />
                ))}
            </div>
          </div>
        </section>

        <Table className="min-w-[250px] w-[100%] h-[70%] border border-white rounded-lg overflow-hidden shadow shadow-[#00000026]">
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
                    <Skeleton className="w-16 sm:w-20 lg:w-32 mx-4 md:mx-8 h-[25px]" />
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
                        <Skeleton className="w-16 sm:w-20 lg:w-32 mx-4 md:mx-8 h-[25px]" />
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
