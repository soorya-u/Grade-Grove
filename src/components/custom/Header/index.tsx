import Link from "next/link";
import { Audiowide } from "next/font/google";

import Navigator from "./Navigator";
import Hamburger from "./Hamburger";
import { cn } from "@/utils/cn";
import ProfileButton from "./ProfileButton";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

function Header() {
  return (
    <header className="sticky top-0 w-full z-50">
      <nav className="h-[10vh] flex justify-between items-center py-2 px-10 backdrop-blur-sm border-b border-[#ffffff49] rounded-b-md">
        <div className="flex justify-start items-center gap-12">
          <Hamburger className="block sm:hidden" />
          <Link
            href="/"
            className={cn(
              audiowide.className,
              "text-2xl text-nowrap hidden xs:block"
            )}
          >
            Grade Grove
          </Link>
          <Navigator className="hidden sm:flex" />
        </div>
        <div className="ml-8">
          <ProfileButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;
