"use client"

import { Poppins } from "next/font/google";

import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/utils/cn";
import { Button } from "@/components/primitives/button";
import { signIn } from "@/lib/auth";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function OAuthButtons() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 xs:flex-row">
      <Button
        onClick={async () => await signIn("google")}
        variant="outline"
        className={cn(
          poppins.className,
          "group flex gap-x-2 text-sm hover:bg-white hover:text-[#931D68]",
        )}
      >
        <FontAwesomeIcon
          icon={faGoogle}
          className="h-5 w-5 group-hover:[&_path]:fill-[#931D68]"
        />
        Contiue with Google
      </Button>
      <Button
        onClick={async () => await signIn("github")}
        variant="outline"
        className={cn(
          poppins.className,
          "group flex gap-x-2 text-sm hover:bg-white hover:text-[#931D68]",
        )}
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="h-6 w-6 group-hover:[&_path]:fill-[#931D68]"
        />
        Contiue with Github
      </Button>
    </div>
  );
}
