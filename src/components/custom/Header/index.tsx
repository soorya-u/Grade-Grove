import Link from "next/link";
import { Audiowide, Poppins } from "next/font/google";

import Navigator from "./Navigator";
import Hamburger from "./Hamburger";
import { Button } from "@/components/primitives/button";
import { cn } from "@/utils/cn";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "600", subsets: ["latin"] });

function Header() {
  return (
    <header className="sticky top-0 w-full z-50">
      <nav className="h-[10vh] flex justify-between items-center py-2 px-6 backdrop-blur-sm border-b border-[#ffffff49] rounded-b-md 3xs:px-10">
        <div className="flex justify-start items-center gap-12">
          <Hamburger className="block sm:hidden" />
          <Link
            href="/"
            className={cn(audiowide.className, "text-2xl text-nowrap hidden xs:block")}
          >
            Grade Grove
          </Link>
          <Navigator className="hidden sm:flex" />
        </div>
        <div className="ml-8">
          <Button
            size="sm"
            className={cn(poppins.className, "text-md")}
          >
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
