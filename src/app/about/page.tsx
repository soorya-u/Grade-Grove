import { Audiowide, Poppins } from "next/font/google";
import { Metadata } from "next/types";

import { cn } from "@/utils/shadcn";

import VerticalTimeCard from "@/components/pages/about/VerticalTimeCard";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About | Elite AIML",
  description:
    "elite-AIML serves as a comprehensive platform dedicated to presenting and celebrating the outstanding academic achievements of students of the 2021-2025 batch, showcasing the top marks attained during this period.",
  authors: [
    {
      name: "Soorya U",
      url: "https://github.com/soorya-u/",
    },
  ],
};

function About() {
  return (
    <>
      <h1 className={cn(poppins.className, "text-center text-5xl px-4 mt-12")}>
        About Us
      </h1>

      <div className="text-center text-xl px-18 text-[#ccccd2] w-3/4">
        <span className={audiowide.className}>Grade Grove</span> serves as a
        comprehensive platform dedicated to presenting and celebrating the
        outstanding academic achievements of students of the 2021-2025 batch,
        showcasing the top marks attained during this period.
      </div>
      <h2 className={cn(poppins.className, "text-center px-4 text-4xl  mt-8")}>
        Development Journey Timestamps
      </h2>

      <div className="flex flex-col justify-center items-center w-full divide-y-8 divide-transparent">
        <VerticalTimeCard />
      </div>
    </>
  );
}

export default About;
