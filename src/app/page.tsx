import Image from "next/image";
import { Audiowide, Poppins } from "next/font/google";

import { cn } from "@/utils/shadcn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-7 before:content-[''] after:content-['']">
      <div className="flex justify-center items-center gap-6 flex-wrap px-4">
        <h1 className={cn(audiowide.className, "text-5xl text-center")}>
          elite-AIML
        </h1>
        <Image
          priority
          src="/elite_aiml.png"
          alt="logo"
          height={7 * 16}
          width={7 * 16}
          className="invert"
        ></Image>
      </div>
      <article className="text-center text-xl px-4">
        Our Website is Dedicated for Providing a Comprehensive List of AIML
        students who have Achieved the Highest Scores and Good Rankings in the
        Semester Examinations. We typically Aim to Recognize and Celebrate the
        Accomplishments of Top Performers in the Respective Subjects. Users can
        Access Information about the Leading Achievers, their Achievements, and
        often find Resources or Tips for Aspiring Individuals looking to excel
        in their Chosen Pursuits. Toppers List websites serve as a source of
        inspiration and information for those striving for excellence.
      </article>

      <article className="text-center text-xl px-4">
        Academic Excellence is a pursuit that has been Cherished across Cultures
        and Generations. Recognizing and celebrating the achievements of
        academic toppers has become a tradition in educational Institutions
        Worldwide. The Academic Toppers List serves as a Testament to the
        Dedication, Hardwork, and Exceptional Abilities of these students.
      </article>

      <h2
        className={cn(
          poppins.className,
          "text-3xl text-center self-center px-4"
        )}
      >
        Significance of Academic Toppers Lists
      </h2>
      <ul className="flex flex-col gap-2 px-4">
        <li className="list-none text-lg">
          <FontAwesomeIcon className="w-3 inline mr-2" icon={faArrowRight} />{" "}
          Fostering Healthy Competition
        </li>
        <li className="list-none text-lg">
          <FontAwesomeIcon className="w-3 inline mr-2" icon={faArrowRight} />{" "}
          Acknowledging Achievements
        </li>
        <li className="list-none text-lg">
          <FontAwesomeIcon className="w-3 inline mr-2" icon={faArrowRight} />{" "}
          Encouraging Excellence
        </li>
      </ul>
    </main>
  );
}
