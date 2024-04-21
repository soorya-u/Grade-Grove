"use client";

import { Poppins } from "next/font/google";

import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/utils/cn";
import { Button } from "@/components/primitives/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

async function handleClick(provider: string, redirectUrl: string | null) {
  const route = "/" + redirectUrl?.split("/").slice(3).join("/");
  signIn(provider, { redirect: true, callbackUrl: route ?? "/" });
}

export default function OAuthButtons() {
  const searchPrarms = useSearchParams();

  return (
    <div className="flex flex-col justify-center items-center gap-4 xs:flex-row">
      <Button
        onClick={async () =>
          await handleClick("google", searchPrarms.get("callbackUrl"))
        }
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
        onClick={async () =>
          await handleClick("github", searchPrarms.get("callbackUrl"))
        }
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
        Contiue with Github
      </Button>
    </div>
  );
}
