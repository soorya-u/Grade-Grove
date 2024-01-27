import Link from "next/link";
import { Audiowide } from "next/font/google";

import Navigator from "./Navigator";
import Hamburger from "./Hamburger";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

function Header() {
  return (
    <>
      <header>
        <nav
          className="h-[11vh] flex justify-between items-center p-4 rounded-b-xl border-b-2 border-b-white gap-8 px-10"
          style={{
            background:
              "linear-gradient(to bottom, #00000040 90%, transparent)",
          }}
        >
          <Navigator className="hidden md:flex" />
          <Hamburger className="block md:hidden" />
          <section className="flex justify-end">
            <Link
              href="https://github.com/soorya-u/Elite-AIML"
              className={`${audiowide.className} text-3xl md:text-4xl text-nowrap`}
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
