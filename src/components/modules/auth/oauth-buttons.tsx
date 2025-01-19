"use client";

import { Poppins } from "next/font/google";
import { useSearchParams } from "next/navigation";

import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/utils/cn";
import { signInGoogle, signInGitHub } from "@/server/auth";

import ServerButton from "@/components/modules/user-card/server-button";
import { useError } from "@/hooks/use-error";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function OAuthButtons() {
  const searchParams = useSearchParams();
  useError("error");

  const formData = new FormData();
  formData.append("callbackUrl", searchParams.get("callbackUrl") ?? "/");

  return (
    <div className="flex flex-col items-center justify-center gap-4 xs:flex-row">
      <ServerButton
        action={async () => await signInGoogle(formData)}
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
        action={async () => await signInGitHub(formData)}
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
