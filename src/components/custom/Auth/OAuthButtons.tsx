"use client";

import { Poppins } from "next/font/google";
import { useSearchParams } from "next/navigation";

import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/utils/cn";
import { signInGoogle, signInGitHub } from "@/actions/sign-in";

import ServerButton from "@/components/custom/ServerButton";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function OAuthButtons() {
  const searchParams = useSearchParams();

  if (searchParams.get("error"))
    throw new Error(searchParams.get("error") ?? undefined);

  return (
    <div className="flex flex-col items-center justify-center gap-4 xs:flex-row">
      <ServerButton
        action={() => signInGoogle(searchParams.get("callbackUrl") ?? "/")}
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
        action={() => signInGitHub(searchParams.get("callbackUrl") ?? "/")}
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
