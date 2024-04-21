import { Poppins } from "next/font/google";

import { cn } from "@/utils/cn";
import OAuthButtons from "./OAuthButtons";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function OAuth() {
  return (
    <>
      <div className="flex justify-center items-center gap-x-4 my-4">
        <hr className="flex-1 h-[1px] bg-[#ccccd2] border-t-0" />
        <span className={cn(poppins.className, "text-[#ccccd2] text-base")}>
          or
        </span>
        <hr className="flex-1 w-50px h-[1px] bg-[#ccccd2] border-t-0" />
      </div>
      <div>
        <p
          className={cn(
            poppins.className,
            "text-center text-[#ccccd2] text-base mb-4"
          )}
        >
          Continue with
        </p>
        <OAuthButtons />
      </div>
    </>
  );
}
