import { Metadata } from "next/types";

import { defaultMetadata } from "@/constants/metadata";

import getOrdinalSemester from "@/utils/getOrdinalSemester";

type SemesterLayoutProps = {
  children: React.ReactNode;
  params: { sem: string };
};

export function generateStaticParams() {
  return [
    { sem: "first" },
    { sem: "second" },
    { sem: "third" },
    { sem: "fourth" },
  ];
}

export async function generateMetadata({
  params,
}: SemesterLayoutProps): Promise<Metadata> {
  const semester = `${getOrdinalSemester(params.sem)} Semester`;

  return {
    title: `${semester} | Grade Grove`,
    description: `Explore comprehensive ${semester} results for all students. Easily scores and GPAs enhancing transparency and communication within the educational institution.`,
    ...defaultMetadata,
  };
}

export default function SemesterLayout(props: SemesterLayoutProps) {
  return props.children as React.ReactElement;
}
