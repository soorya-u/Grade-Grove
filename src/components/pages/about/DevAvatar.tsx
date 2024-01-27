"use client";

import { Rubik } from "next/font/google";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";

import { cn } from "@/utils/shadcn";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });

function DevAvatar({ name, imgPath }: { name: string; imgPath: string }) {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Avatar className="h-[100px] w-[100px] aspect-square border-2 border-[#ccc]  scale-100 hover:scale-[1.2] transition-transform duration-150 ease-linear cursor-pointer">
              <AvatarImage src={imgPath} />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent side="bottom" className={cn(rubik.className, "text-base")}>
            {name}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export default DevAvatar;
