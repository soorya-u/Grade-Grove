import Link from "next/link";
import ProfileCard from "./ProfileCard";
import Timestamp from "./Timestamp";

import { earlyDevs } from "./info";

export default function VerticalTimeCard() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-4xl w-full space-y-5">
        {/* Next Migration */}
        <div className="space-y-4 w-full px-4">
          <Timestamp
            name="Migration to T3 Stack"
            href="https://github.com/soorya-u/Elite-AIML/commits/mean-stack"
            date={new Date("01/19/2024")}
          />
          <div className="grid grid-cols-1 gap-5 w-full">
            <ProfileCard
              name={"Soorya U"}
              imgPath={"/devs/soorya.jpg"}
              description={
                <>
                  Migrated the Project to the{" "}
                  <Link
                    className="underline underline-offset-2 italic decoration-[#f64444]"
                    href="https://create.t3.gg/"
                  >
                    T3 Stack
                  </Link>
                  , incorporating{" "}
                  <Link
                    className="underline underline-offset-2 italic decoration-[#f64444]"
                    href="https://nextjs.org/"
                  >
                    Next.js
                  </Link>{" "}
                  for frontend development,{" "}
                  <Link
                    className="underline underline-offset-2 italic decoration-[#f64444]"
                    href="https://www.prisma.io/"
                  >
                    Prisma
                  </Link>{" "}
                  for database efficiency, and{" "}
                  <Link
                    className="underline underline-offset-2 italic decoration-[#f64444]"
                    href="https://tailwindui.com/"
                  >
                    Tailwind
                  </Link>{" "}
                  for responsive styling, showcasing a strategic upgrade in
                  functionality and design.and aesthetic appeal of the project's
                  architecture.
                </>
              }
              githubLink="https://github.com/soorya-u"
            />
            <ProfileCard
              name={"Saanvi MJ"}
              imgPath={"/devs/saanvi.jpg"}
              description={
                <>
                  Diligently Expanded the Results and engaged with the
                  <Link
                    className="underline underline-offset-2 italic decoration-[#f64444]"
                    href="https://postgresql.org/"
                  >
                    PostgreSQL
                  </Link>{" "}
                  database, contributing to a more Robust and Comprehensive
                  Dataset for the Project.
                </>
              }
              githubLink="https://github.com/Saanvi-MJ"
            />
          </div>
        </div>
        {/* MEAN Stack Migration */}
        <div className="space-y-4 w-full px-4">
          <Timestamp
            name="Transitioned to MEAN Stack"
            href="https://github.com/soorya-u/Elite-AIML/commits/mean-stack"
            date={new Date("12/23/2023")}
          />
          <div className="grid grid-cols-1 gap-5 w-full">
            <ProfileCard
              name={"Soorya U"}
              imgPath={"/devs/soorya.jpg"}
              description={
                <>
                  Undertook the process of migrating the project to the{" "}
                  <Link
                    href="https://www.mongodb.com/"
                    className="underline underline-offset-2 italic decoration-[#f64444]"
                  >
                    MongoDB
                  </Link>
                  ,{" "}
                  <Link
                    href="https://expressjs.com/"
                    className="underline underline-offset-2 italic decoration-[#f64444]"
                  >
                    Express.js
                  </Link>
                  ,{" "}
                  <Link
                    href="https://angular.dev/"
                    className="underline underline-offset-2 italic decoration-[#f64444]"
                  >
                    Angular
                  </Link>
                  ,{" "}
                  <Link
                    href="https://nodejs.org/"
                    className="underline underline-offset-2 italic decoration-[#f64444]"
                  >
                    Node.js
                  </Link>{" "}
                  <span className="italic">(MEAN Stack)</span>, showcasing a
                  thoughtful initiative to leverage the full-stack capabilities
                  and optimize the project's architecture for enhanced
                  functionality and scalability.
                </>
              }
              githubLink="https://github.com/soorya-u"
            />
          </div>
        </div>
        {/* Sass Styling */}
        <div className="space-y-4 w-full px-4">
          <Timestamp
            name="Sass Styling"
            href="https://github.com/soorya-u/Elite-AIML/tree/sass-integration"
            date={new Date("11/05/2023")}
          />
          <div className="grid grid-cols-1 gap-5 w-full">
            <ProfileCard
              name={"Soorya U"}
              imgPath={"/devs/soorya.jpg"}
              description={
                <>
                  Incorporated{" "}
                  <Link
                    href="https://sass-lang.com/"
                    className="underline underline-offset-2 italic decoration-[#f64444]"
                  >
                    SASS
                  </Link>{" "}
                  into the Project, elevating the Styling Capabilities with a
                  touch of Efficiency.
                </>
              }
              githubLink="https://github.com/soorya-u"
            />
          </div>
        </div>
        {/* API Approach */}
        <div className="space-y-4 w-full px-4">
          <Timestamp
            name="API Approach"
            href="https://github.com/soorya-u/Elite-AIML/tree/api-approach"
            date={new Date("09/17/2023")}
          />
          <div className="grid grid-cols-1 gap-5 w-full sm:grid-cols-2">
            {earlyDevs.map((dev, idx) => (
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
      </div>
    </div>
  );
}
