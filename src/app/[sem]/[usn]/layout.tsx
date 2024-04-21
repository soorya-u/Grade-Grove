import { Metadata } from "next/types";

import { Student } from "@/services/student";
import { defaultMetadata } from "@/constants/metadata";

import getOrdinalSemester from "@/utils/getOrdinalSemester";

type StudentPageLayoutProps = {
  children: React.ReactNode;
  params: { sem: string; usn: string };
};

// export async function generateStaticParams() {
//   const allUsn = await Student.getAllUsn();

//   const semDynamicPath = ["first-sem", "second-sem", "third-sem", "fourth-sem"];

//   return semDynamicPath.flatMap((sem) => {
//     return allUsn.map((usn) => ({
//       sem: sem,
//       usn: usn,
//     }));
//   });
// }

export async function generateMetadata({
  params,
}: StudentPageLayoutProps): Promise<Metadata> {
  const studentName = await Student.getStudentName(params.usn);
  const semester = `${getOrdinalSemester(params.sem)} Semester`;

  return {
    title: `${studentName} - ${semester} | Grade Grove`,
    description: `Discover detailed information on ${studentName} of USN ${params.usn}, including all marks and grades attained during ${semester}. This page offers a comprehensive overview of academic performance, providing insight into individual achievements and facilitating efficient monitoring of student progress`,
    ...defaultMetadata,
  };
}

export default function StudentPageLayout(props: StudentPageLayoutProps) {
  return props.children as React.ReactElement;
}
