import Link from "next/link";

import { Audiowide } from "next/font/google";

import { cn } from "@/lib/utils";

import Navigator from "../Navigator";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

function Header() {
  return (
    <>
      <header>
        <nav
          className="h-[11vh] flex justify-between items-center p-4 rounded-b-xl border-b-2 border-b-white gap-8 before:content-[''] after:content-['']"
          style={{
            background:
              "linear-gradient(to bottom, #00000040 90%, transparent)",
          }}
        >
          <Navigator />
          <section className="w-2/3 flex justify-end">
            <Link
              href="https://github.com/soorya-u/Elite-AIML"
              className={cn(audiowide.className, "text-4xl")}
              target="_blank"
            >
              elite-AIML
            </Link>
          </section>
        </nav>
      </header>
    </>
  );
}

export default Header;
