import ProfileCard from "./ProfileCard";
import Timestamp from "./Timestamp";

import { commits } from "@/constants/commits";
import { cn } from "@/utils/shadcn";

export default function VerticalTimeCard() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-4xl w-full space-y-5">
        {commits.map((commit, idx) => (
          <div className="space-y-4 w-full px-4">
            <Timestamp
              key={idx}
              name={commit.name}
              href={commit.branchLink}
              date={commit.date}
            />
            <div
              className={cn(
                "grid grid-cols-1 gap-5 w-full",
                idx === 3 && "sm:grid-cols-2"
              )}
            >
              {commit.devs.map((dev, idx) => (
                <ProfileCard
                  key={idx}
                  name={dev.name}
                  imgPath={dev.imgPath}
                  description={dev.description}
                  githubLink={dev.github}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
