import Link from "next/link";
import { Audiowide } from "next/font/google";

import Navigator from "./Navigator";
import Hamburger from "./Hamburger";
import { cn } from "@/utils/cn";
import AuthButton from "../Auth/AuthButton";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

function Header() {
  return (
    <header className="sticky top-0 w-full z-50">
      <nav className="h-[10vh] flex justify-between items-center py-2 px-4 backdrop-blur-sm border-b border-[#ffffff49] rounded-b-md sm:px-8">
        <div className="flex justify-start items-center gap-x-6 sm:gap-x-8">
          <Hamburger className="block sm:hidden" />
          <Link
            href="/"
            className={cn(audiowide.className, "text-2xl text-nowrap")}
          >
            Grade Grove
          </Link>
          <Navigator className="hidden sm:flex" />
        </div>
        <div className="ml-8 hidden xss:flex">
          <AuthButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;
