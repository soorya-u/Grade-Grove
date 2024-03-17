import {
  meanStackDescription,
  saanviT3StackDescription,
  sooryaT3StackDescription,
} from "./Descriptions";

type Devs = {
  name: string;
  imgPath: string;
  github: string;
  description: string | JSX.Element;
};

type Commit = {
  name: string;
  branchLink: string;
  date: Date;
  devs: Devs[];
};

const t3StackMigration: Commit = {
  name: "Migration to T3 Stack",
  branchLink: "https://github.com/soorya-u/Elite-AIML/tree/main",
  date: new Date("01/19/2024"),
  devs: [
    {
      name: "Soorya U",
      imgPath: "/devs/soorya.jpg",
      github: "https://github.com/soorya-u",
      description: sooryaT3StackDescription,
    },
    {
      name: "Saanvi MJ",
      imgPath: "/devs/saanvi.jpg",
      github: "https://github.com/Saanvi-MJ",
      description: saanviT3StackDescription,
    },
  ],
};

const meanStackTransition = {
  name: "Transitioned to MEAN Stack",
  branchLink: "https://github.com/soorya-u/Elite-AIML/tree/mean-stack",
  date: new Date("12/23/2023"),
  devs: [
    {
      name: "Soorya U",
      imgPath: "/devs/soorya.jpg",
      github: "https://github.com/soorya-u",
      description: meanStackDescription,
    },
  ],
};

const sassStyling: Commit = {
  name: "Sass Styling",
  branchLink: "https://github.com/soorya-u/Elite-AIML/tree/sass-integration",
  date: new Date("11/05/2023"),
  devs: [
    {
      name: "Soorya U",
      imgPath: "/devs/soorya.jpg",
      github: "https://github.com/soorya-u",
      description:
        "Implemented Sass for enhanced styling and responsiveness, leveraging its syntactically improved stylesheet features within the UI design process.",
    },
  ],
};

const earlyDevs: Devs[] = [
  {
    name: "Soorya U",
    imgPath: "/devs/soorya.jpg",
    github: "https://github.com/soorya-u",
    description:
      "Accomplished the design of a comprehensive UI and the Integration of backend API calls using the Angular Framework.",
  },
  {
    name: "Saanvi MJ",
    imgPath: "/devs/saanvi.jpg",
    github: "https://github.com/Saanvi-MJ",
    description:
      "Collected Data and created a JSON file containing the Results and Incorporated Color Schemes into the Design.",
  },
  {
    name: "Devika M",
    imgPath: "/devs/devi.jpg",
    github: "https://github.com/devikamallik",
    description:
      "Crafted a Detailed Project Report encapsulating essential Information, Insights, and Outcomes of the Entire Project.",
  },
  {
    name: "Aishwarya HA",
    imgPath: "/devs/aish.jpg",
    github: "https://github.com/Aishwarya-HA",
    description:
      "Crafted a Detailed Project Report encapsulating essential Information, Insights, and Outcomes of the Entire Project.",
  },
  {
    name: "Syeda Taneen Falak",
    imgPath: "/devs/taneen.jpg",
    github: "https://github.com/Taneen-Falak",
    description:
      "Developed a PowerPoint Presentation for the Project, incorporating Key Information effectively about the Project.",
  },
  {
    name: "Pratham KR",
    imgPath: "/devs/pratham.jpg",
    github: "https://github.com/bangrepratham",
    description:
      "Artistically crafted a Logo, infusing creativity to encapsulate the Essence of the Project.",
  },
  {
    name: "Afifa Hanif",
    imgPath: "/devs/afifa.jpg",
    github: "",
    description:
      "Developed a PowerPoint Presentation for the Project, incorporating Key Information effectively about the Project.",
  },
  {
    name: "Yashaswini KV",
    imgPath: "/devs/yashaswini.jpg",
    github: "",
    description: "Gathered Data, Contributing only to the Initial Stages.",
  },
];

const apiApproach: Commit = {
  name: "API Approach",
  branchLink: "https://github.com/soorya-u/Elite-AIML/tree/api-approach",
  date: new Date("09/17/2023"),
  devs: earlyDevs,
};

export const commits: Commit[] = [
  t3StackMigration,
  meanStackTransition,
  sassStyling,
  apiApproach,
];
