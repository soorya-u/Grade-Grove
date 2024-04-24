import Link from "next/link";
import { Audiowide } from "next/font/google";

import Navigator from "./Navigator";
import Hamburger from "./Hamburger";
import { cn } from "@/utils/cn";
import AuthButton from "../Auth/AuthButton";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="flex h-[10vh] items-center justify-between rounded-b-md border-b border-[#ffffff49] px-4 py-2 backdrop-blur-sm sm:px-8">
        <div className="flex items-center justify-start gap-x-6 sm:gap-x-8">
          <Hamburger className="block sm:hidden" />
          <Link
            href="/"
            className={cn(audiowide.className, "text-nowrap text-2xl")}
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
