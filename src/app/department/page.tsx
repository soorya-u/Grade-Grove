import { Poppins } from "next/font/google";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { cn } from "@/utils/shadcn";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function () {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-8 px-4">
        <h1 className={cn(poppins.className, "text-3xl text-center")}>
          Department of AI & ML
        </h1>
        <Image
          src="/department-logo.png"
          alt="Dept Logo"
          width={8 * 16}
          height={8 * 16}
          className="invert"
        />
      </div>
      <div className="flex flex-col items-start gap-3 px-4">
        <article className="text-center w-[90vw] text-lg">
          The Department of Artificial Intelligence and Machine Learning was
          established in the Academic year 2021-2022 with an Intake of 65
          Students. Artificial intelligence (AI) is the emerging Field of
          Computer Science and Engineering having an Influence on Conventional
          knowledge Acquisition, Processing, and Inference. AI defines the world
          by building Self-learning and Decision-making Machines learning
          through Experience. AI is to build simulations of Human Intelligence
          on Machines. In achieving Machine Intelligence, Machine Learning (ML)
          plays a vital role. Hence AI & ML are bought Together.
        </article>
        <h2 className={cn(poppins.className, "text-left text-3xl")}>Vision</h2>
        <article className="w-[90vw] text-lg">
          To Achieve excellent standards of quality education in Artificial
          Intelligence and Machine Learning to cater the needs of emerging
          fields.
        </article>
        <h2 className={cn(poppins.className, "text-left text-3xl")}>Mission</h2>
        <article className="w-[90vw] text-lg">
          <ul className="flex flex-col gap-2">
            <li>
              <FontAwesomeIcon
                className="w-3 inline mr-2"
                icon={faArrowRight}
              />{" "}
              To nurture students with strong fundamentals in the stream of
              Artificial Intelligence and Machine Learning for their successful
              Career.
            </li>

            <li>
              <FontAwesomeIcon
                className="w-3 inline mr-2"
                icon={faArrowRight}
              />{" "}
              To build a Conducive Environment to learn Professional and
              Technical Skills through value based Education.
            </li>

            <li>
              <FontAwesomeIcon
                className="w-3 inline mr-2"
                icon={faArrowRight}
              />{" "}
              To Enrich and Empower students caliber to Contribute towards
              Research and Innovations.
            </li>
          </ul>
        </article>
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 items-center px-4 w-[80vw]">
        <div className="flex flex-col items-center text-lg">
          <b className="text-center">HOD of Department</b>
          <p className="text-center">Dr. Sunitha MR</p>
        </div>
        <div className="flex flex-col items-center text-lg">
          <b className="text-center">Class Co-ordinator</b>
          <p className="text-center">Ms. Sathyabhama R</p>
        </div>
      </div>
    </>
  );
}
