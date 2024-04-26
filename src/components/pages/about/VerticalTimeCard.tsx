import ProfileCard from "./ProfileCard";
import Timestamp from "./Timestamp";

import { commits } from "@/constants/commits";
import { cn } from "@/utils/cn";

export default function VerticalTimeCard() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-4xl space-y-5">
        {commits.map((commit, idx) => (
          <div key={idx} className="w-full space-y-4 px-4">
            <Timestamp
              name={commit.name}
              href={commit.branchLink}
              date={commit.date}
            />
            <div
              className={cn(
                "grid w-full grid-cols-1 gap-5",
                commit.devs.length > 4 && "sm:grid-cols-2",
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
