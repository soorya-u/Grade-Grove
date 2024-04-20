import { Poppins } from "next/font/google";

import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/utils/cn";
import { Button } from "@/components/primitives/button";

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
        <div className="flex flex-col justify-center items-center gap-4 xs:flex-row">
          <Button
            variant="outline"
            className={cn(
              poppins.className,
              "flex gap-x-2 text-sm hover:bg-white hover:text-[#931D68] group"
            )}
          >
            <FontAwesomeIcon
              icon={faGoogle}
              className="w-5 h-5 group-hover:[&_path]:fill-[#931D68]"
            />
            Contiue with Google
          </Button>
          <Button
            variant="outline"
            className={cn(
              poppins.className,
              "flex gap-x-2 text-sm hover:bg-white hover:text-[#931D68] group"
            )}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="w-6 h-6 group-hover:[&_path]:fill-[#931D68]"
            />
            Contiue with Google
          </Button>
        </div>
      </div>
    </>
  );
}
