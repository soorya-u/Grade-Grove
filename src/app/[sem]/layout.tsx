import { Metadata } from "next/types";

import getOrdinalSemester from "@/utils/custom/getOrdinalSemester";

type SemesterLayoutProps = {
  children: React.ReactNode;
  params: { sem: string };
};

export function generateStaticParams() {
  return [
    { sem: "first-sem" },
    { sem: "second-sem" },
    { sem: "third-sem" },
    { sem: "fourth-sem" },
  ];
}

export async function generateMetadata({
  params,
}: SemesterLayoutProps): Promise<Metadata> {
  const semester = `${getOrdinalSemester(params.sem)} Semester`;

  return {
    title: `${semester} | Grade Grove`,
    description: `Explore comprehensive ${semester} results for all students. Easily scores and GPAs enhancing transparency and communication within the educational institution.`,
    authors: [
      {
        name: "Soorya U",
        url: "https://github.com/soorya-u/",
      },
    ],
    metadataBase: new URL("https://grade-grove.soorya-u.dev"),
  };
}

export default function SemesterLayout(props: SemesterLayoutProps) {
  return <>{props.children}</>;
}
