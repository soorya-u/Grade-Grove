import { Audiowide, Poppins } from "next/font/google";

import { cn } from "@/utils/cn";

import VerticalTimeCard from "@/components/pages/about/VerticalTimeCard";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "600", subsets: ["latin"] });

function About() {
  return (
    <>
      <h1 className={cn(poppins.className, "mt-12 px-4 text-center text-5xl")}>
        About Us
      </h1>

      <div className="px-18 w-3/4 text-center text-xl text-[#ccccd2]">
        <span className={audiowide.className}>Grade Grove</span> serves as a
        comprehensive platform dedicated to presenting and celebrating the
        outstanding academic achievements of students of the 2021-2025 batch,
        showcasing the top marks attained during this period.
      </div>
      <h2 className={cn(poppins.className, "mt-8 px-4 text-center  text-4xl")}>
        Development Journey Timestamps
      </h2>

      <div className="flex w-full flex-col items-center justify-center divide-y-8 divide-transparent">
        <VerticalTimeCard />
      </div>
    </>
  );
}

export default About;
