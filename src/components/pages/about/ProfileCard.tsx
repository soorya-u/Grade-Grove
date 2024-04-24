import { Poppins, Rubik } from "next/font/google";

import { CardContent, Card } from "@/components/primitives/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/primitives/avatar";

import { cn } from "@/utils/cn";
import Link from "next/link";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function ProfileCard({
  name,
  imgPath,
  description,
  githubLink,
}: {
  name: string;
  imgPath: string;
  description: string | JSX.Element;
  githubLink: string;
}) {
  return (
    <>
      <Card>
        <CardContent className="pt-4">
          <div className="flex items-center space-x-4">
            <Avatar className="aspect-square scale-100 cursor-pointer border-2 border-[#ccc] transition-transform duration-150 ease-linear hover:scale-[1.2]">
              <AvatarImage src={imgPath} />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <Link
              href={githubLink}
              className={cn(
                poppins.className,
                "cursor-pointer text-lg text-white transition-[color] duration-150 ease-linear hover:text-[#f64444]",
              )}
            >
              {name}
            </Link>
            <div className="flex-1 border-t border-[#ffffff49]" />
          </div>
        </CardContent>
        <CardContent className="py-2">
          <div className="prose prose-sm max-w-none">
            <p className={cn(rubik.className)}>{description}</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default ProfileCard;
