import { cn } from "@/utils/cn";
import { Poppins } from "next/font/google";

import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between items-center min-h-16 w-[85vw] m-auto gap-y-4 border-t-[2px] border-t-[#ffffff49] md-lg:flex-row py-3">
      <div className="flex justify-center gap-x-2 items-center flex-wrap">
        <Image src="/logo.png" width={28} height={28} alt="Elite-AIML-Logo" />
        <p className={cn(poppins.className, "text-gray-200 text-center")}>
          Built by{" "}
          <Link
            href="https://twitter.com/sooryaa_u"
            className="underline underline-offset-2"
            target="_blank"
          >
            soorya-u
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/soorya-u/Grade-Grove"
            className="underline underline-offset-2"
            target="_blank"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-2 flex-wrap">
        <p className={cn(poppins.className, "text-gray-200 text-center")}>
          Check these Projects Out:
        </p>
        <Link href="https://belief.soorya-u.dev" target="_blank">
          <Image
            src="https://belief.soorya-u.dev/logo.png"
            width={28}
            height={28}
            alt="Belief-Logo"
          ></Image>
        </Link>
      </div>
    </footer>
  );
}
