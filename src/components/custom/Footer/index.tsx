import { cn } from "@/utils/shadcn";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Poppins, Chakra_Petch } from "next/font/google";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const chakraPetch = Chakra_Petch({ weight: "600", subsets: ["latin"] });

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center flex-col gap-4  mt-12 mb-6">
        <section className="sticky flex flex-col justify-center w-[95vw] py-4 items-center border-t-[2px] border-t-[#ffffff49] gap-4 2xs:flex-row 2xs:justify-between 2xs:items-start 2xs:px-6">
          <div className="flex justify-center items-center flex-col gap-3 2xs:gap-2">
            <h2
              className={cn(
                poppins.className,
                "text-[1.7rem] text-[#fff] font-extrabold"
              )}
            >
              Our Projects
            </h2>
            <h4 className="self-center 2xs:self-start">
              <a
                className={cn(
                  chakraPetch.className,
                  "text-[1.7rem] no-underline text-[#1da1f2]"
                )}
                href="https://belief.soorya-u.dev/"
              >
                Belief
              </a>
            </h4>
          </div>

          <div className="flex justify-center items-center flex-col gap-2 2xs:gap-4">
            <h2
              className={cn(
                poppins.className,
                "text-[1.7rem] text-[#fff] font-extrabold"
              )}
            >
              Get in Touch
            </h2>
            <div className="flex justify-center items-center gap-6">
              <a href="https://github.com/soorya-u/" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
              </a>

              <a href="mailto:sooryau7@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
              </a>

              <a href="https://www.linkedin.com/in/soorya-u/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
