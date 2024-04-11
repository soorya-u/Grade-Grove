import { Metadata } from "next/types";

import { defaultMetadata } from "@/constants/metadata";

type AboutLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "About | Grade Grove",
  description:
    "Grade Grove serves as a comprehensive platform dedicated to presenting and celebrating the outstanding academic achievements of students of the 2021-2025 batch, showcasing the top marks attained during this period.",
  ...defaultMetadata,
};
export default function AboutLayout(props: AboutLayoutProps) {
  return <>{props.children}</>;
}
