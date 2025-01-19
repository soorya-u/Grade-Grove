import { Suspense } from "react";

import { Poppins } from "next/font/google";

import { cn } from "@/utils/cn";
import OAuthButtons from "./oauth-buttons";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function OAuth() {
  return (
    <>
      <div className="my-4 flex items-center justify-center gap-x-4">
        <hr className="h-[1px] flex-1 border-t-0 bg-[#ccccd2]" />
        <span className={cn(poppins.className, "text-base text-[#ccccd2]")}>
          or
        </span>
        <hr className="w-50px h-[1px] flex-1 border-t-0 bg-[#ccccd2]" />
      </div>
      <div>
        <p
          className={cn(
            poppins.className,
            "mb-4 text-center text-base text-[#ccccd2]",
          )}
        >
          Continue with
        </p>
        <Suspense>
          <OAuthButtons />
        </Suspense>
      </div>
    </>
  );
}
