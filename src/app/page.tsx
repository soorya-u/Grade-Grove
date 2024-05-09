import Image from "next/image";
import { Noto_Sans, Poppins } from "next/font/google";

import { cn } from "@/utils/cn";

import { Button } from "@/components/primitives/button";
import Link from "next/link";

const natoSans = Noto_Sans({ weight: "500", subsets: ["latin"] });

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function HomePage() {
  return (
    <section className="flex max-w-full flex-col flex-wrap items-center justify-center gap-6">
      <Image
        priority
        src="/logo.png"
        alt="logo"
        height={7 * 16}
        width={7 * 16}
      ></Image>
      <h1
        className={cn(
          "w-10/12 text-wrap text-center text-6xl text-white",
          poppins.className,
        )}
      >
        A Central Hub for all your Results{" "}
      </h1>
      <h2
        className={cn(
          natoSans.className,
          "w-2/3 text-center text-xl text-[#ccccd2]",
        )}
      >
        Take a panoramic dive into your academic progress by effortlessly
        reviewing, analyzing and tracking every mark and grade earned throughout
        each semester.
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        <Button
          className="text-md hover:bg-white hover:text-[#931D68]"
          variant="outline"
        >
          <Link href="/semester">Check out your Result</Link>
        </Button>
        <Button
          className="text-md hover:bg-white hover:text-[#931D68]"
          variant="outline"
        >
          <Link href="https://github.com/soorya-u/Grade-Grove">
            View Source Code
          </Link>
        </Button>
      </div>
    </section>
  );
}
