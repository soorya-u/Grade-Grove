import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Noto_Sans, Poppins } from "next/font/google";
import Link from "next/link";

const natoSans = Noto_Sans({ weight: "500", subsets: ["latin"] });

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function NotFound() {
  return (
    <section className="my-14 flex flex-col items-center justify-center gap-10 before:content-[''] after:content-['']">
      <h2 className={cn("px-3 text-center text-7xl", poppins.className)}>
        Error 404: Page Not Found
      </h2>
      <p
        className={cn(
          "px-3 text-center text-3xl text-[#ccccd2]",
          natoSans.className,
        )}
      >
        Could not find requested resource
      </p>
      <Button variant={"outline"}>
        <Link
          className={cn("text-center text-lg", natoSans.className)}
          href="/"
        >
          Return Home
        </Link>
      </Button>
    </section>
  );
}
