import {
  meanStackDescription,
  saanviT3StackDescription,
  sooryaT3StackDescription,
  nextAuthDescription,
} from "@/components/pages/about/Descriptions";

import {
  afifa,
  aish,
  devika,
  pratham,
  saanvi,
  soorya,
  taneen,
  yashaswini,
} from "./devs";

import { Commit, Contributor } from "@/types/changelog";

const nextAuth: Commit = {
  name: "Introduction Authentication Measures",
  branchLink: "https://github.com/soorya-u/Grade-Grove/issues/18",
  date: new Date("04/26/2024"),
  devs: [
    {
      ...soorya,
      description: nextAuthDescription,
    },
  ],
};

const t3StackMigration: Commit = {
  name: "Migration to T3 Stack",
  branchLink: "https://github.com/soorya-u/Elite-AIML/tree/main",
  date: new Date("01/19/2024"),
  devs: [
    {
      ...soorya,
      description: sooryaT3StackDescription,
    },
    {
      ...saanvi,
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
      ...soorya,
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
      ...soorya,
      description:
        "Implemented Sass for enhanced styling and responsiveness, leveraging its syntactically improved stylesheet features within the UI design process.",
    },
  ],
};

const earlyDevs: Contributor[] = [
  {
    ...soorya,
    description:
      "Accomplished the design of a comprehensive UI and the Integration of backend API calls using the Angular Framework.",
  },
  {
    ...saanvi,
    description:
      "Collected Data and created a JSON file containing the Results and Incorporated Color Schemes into the Design.",
  },
  {
    ...devika,
    description:
      "Crafted a Detailed Project Report encapsulating essential Information, Insights, and Outcomes of the Entire Project.",
  },
  {
    ...aish,
    description:
      "Crafted a Detailed Project Report encapsulating essential Information, Insights, and Outcomes of the Entire Project.",
  },
  {
    ...taneen,
    description:
      "Developed a PowerPoint Presentation for the Project, incorporating Key Information effectively about the Project.",
  },
  {
    ...afifa,
    description:
      "Developed a PowerPoint Presentation for the Project, incorporating Key Information effectively about the Project.",
  },
  {
    ...pratham,
    description: "Crafted a Logo, Contributing only to the Initial Stages.",
  },
  {
    ...yashaswini,
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
  nextAuth,
  t3StackMigration,
  meanStackTransition,
  sassStyling,
  apiApproach,
];
