"use client"

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { natoSans, poppins } from "@/fonts";

export default function NotFound() {
  return (
    <section className="my-14 flex flex-col items-center justify-center gap-10 before:content-[''] after:content-['']">
      <h2 className={cn("px-3 text-center text-7xl", poppins.className)}>
        Something went Wrong!
      </h2>
      <p
        className={cn(
          "px-3 text-center text-3xl text-[#ccccd2]",
          natoSans.className,
        )}
      >
        Please Try again Later
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
