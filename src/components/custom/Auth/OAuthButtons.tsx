"use client";

import { Poppins } from "next/font/google";

import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/utils/cn";
import { signInGoogle, signInGitHub } from "@/actions/sign-in";

import ServerButton from "@/components/custom/ServerButton";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function OAuthButtons() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 xs:flex-row">
      <ServerButton
        action={signInGoogle}
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
      </ServerButton>
      <ServerButton
        action={signInGitHub}
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
      </ServerButton>
    </div>
  );
}
