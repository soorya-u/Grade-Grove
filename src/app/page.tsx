import Image from "next/image";
import { Noto_Sans, Poppins } from "next/font/google";

import { cn } from "@/utils/cn";

import { Button } from "@/components/primitives/button";
import Link from "next/link";

const natoSans = Noto_Sans({ weight: "500", subsets: ["latin"] });

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center gap-6 max-w-full flex-wrap mt-16">
      <Image
        priority
        src="/elite_aiml_white.png"
        alt="logo"
        height={7 * 16}
        width={7 * 16}
      ></Image>
      <h1
        className={cn(
          "text-6xl text-white text-wrap text-center w-10/12",
          poppins.className
        )}
      >
        A Central Hub for all your Results{" "}
      </h1>
      <h2
        className={cn(
          natoSans.className,
          "text-xl text-center text-[#ccccd2] w-2/3"
        )}
      >
        Take a panoramic dive into your academic progress by effortlessly
        reviewing, analyzing and tracking every mark and grade earned throughout
        each semester.
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
        <Button variant="outline">
          <Link href="/">Check out your Result</Link>
        </Button>
        <Button variant="outline">
          <Link href="https://github.com/soorya-u/Grade-Grove">
            View Source Code
          </Link>
        </Button>
      </div>
    </section>
  );
}
