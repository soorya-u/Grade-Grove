import { Button } from "@/components/primitives/button";
import { cn } from "@/utils/cn";
import { Noto_Sans, Poppins } from "next/font/google";
import Link from "next/link";

const natoSans = Noto_Sans({ weight: "500", subsets: ["latin"] });

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 my-14 before:content-[''] after:content-['']">
      <h2 className={cn("text-7xl text-center px-3", poppins.className)}>
        Error 404: Page Not Found
      </h2>
      <p className={cn("text-3xl text-center px-3 text-[#ccccd2]", natoSans.className)}>
        Could not find requested resource
      </p>
      <Button variant={"outline"}>
        <Link className={cn("text-lg text-center", natoSans.className)} href="/">Return Home</Link>
      </Button>
    </section>
  );
}
