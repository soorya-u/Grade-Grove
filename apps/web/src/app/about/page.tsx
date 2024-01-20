import { Audiowide, Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import DevAvatar from "@/components/custom/DevAvatar";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

const devs = [
  {
    name: "Soorya U",
    imgPath: "/devs/soorya.jpg",
  },
  {
    name: "Saanvi MJ",
    imgPath: "/devs/saanvi.jpg",
  },
  {
    name: "Devika M",
    imgPath: "/devs/devi.jpg",
  },
  {
    name: "Aishwarya HA",
    imgPath: "/devs/aish.jpg",
  },
  {
    name: "Syeda Taneen Falak",
    imgPath: "/devs/taneen.jpg",
  },
  {
    name: "Pratham KR",
    imgPath: "/devs/pratham.jpg",
  },
  {
    name: "Afifa Hanif",
    imgPath: "/devs/afifa.jpg",
  },
  {
    name: "Yashaswini KV",
    imgPath: "/devs/yashaswini.jpg",
  },
];

function About() {
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-8 before:content-[''] after:content-['']">
        <h1 className={cn(poppins.className, "text-center text-5xl px-4")}>
          About Us
        </h1>

        <div className="text-center text-xl px-18">
          We the Students of AIML department, group of 8 members have Developed
          a Webpage named{" "}
          <span className={audiowide.className}>elite-AIML</span> on listing Top
          10 Student Marks of 2021-2025 batch.
        </div>
        <h2 className={cn(poppins.className, "text-center px-4")}>
          Contributers
        </h2>

        <div className="flex justify-center flex-wrap px-4">
          {devs.map((elem, idx) => (
            <DevAvatar key={idx} name={elem.name} imgPath={elem.imgPath} />
          ))}
        </div>

        <div className="text-center px-20">
          <h2 className={cn(poppins.className, "text-xl")}>Contact Our Team</h2>
          <a href="mailto:sooryau7@gmail.com">
            <b className={cn(audiowide.className, "text-4xl")}>Alpha Tech</b>
          </a>
        </div>
      </main>
    </>
  );
}

export default About;
