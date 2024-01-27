import { Rubik } from "next/font/google";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/shadcn/hover-card";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";

import { cn } from "@/utils/shadcn";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });

function DevAvatar({ name, imgPath }: { name: string; imgPath: string }) {
  return (
    <>
      {/* Mobile Only */}
      <div className="lg:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="h-[100px] w-[100px] aspect-square border-2 border-[#ccc]  scale-100 hover:scale-[1.2] transition-transform duration-150 ease-linear cursor-pointer">
              <AvatarImage src={imgPath} />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent
            side="bottom"
            className={cn(
              rubik.className,
              "text-base bg-[#00000040] backdrop-blur border-[2px] border-white rounded-[0.8rem] text-[1rem]"
            )}
          >
            {name}
          </PopoverContent>
        </Popover>
      </div>

      {/* Desktop Only */}
      <div className="hidden lg:block">
        <HoverCard openDelay={200} closeDelay={150}>
          <HoverCardTrigger asChild>
            <Avatar className="h-[100px] w-[100px] aspect-square border-2 border-[#ccc]  scale-100 hover:scale-[1.2] transition-transform duration-150 ease-linear cursor-pointer">
              <AvatarImage src={imgPath} />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
          </HoverCardTrigger>
          <HoverCardContent
            side="bottom"
            className={cn(
              rubik.className,
              "text-base bg-[#00000040] backdrop-blur border-[2px] border-white rounded-[0.8rem] text-[1rem]"
            )}
          >
            {name}
          </HoverCardContent>
        </HoverCard>
      </div>
    </>
  );
}

export default DevAvatar;
