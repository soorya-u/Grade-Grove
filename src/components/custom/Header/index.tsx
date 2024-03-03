import Link from "next/link";
import { Audiowide } from "next/font/google";

import Navigator from "./Navigator";
import Hamburger from "./Hamburger";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

function Header() {
  return (
    <>
      <header className="sticky top-0 w-full z-50">
        <nav className="h-[10vh] flex justify-between items-center p-2 backdrop-blur-sm border-b border-[#ffffff49] rounded-b-md gap-8 px-10">
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
