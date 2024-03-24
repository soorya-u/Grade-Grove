import { Metadata } from "next/types";

import { Student } from "@/services/student";

import StudentHeading from "@/components/pages/student/StudentHeading";
import StudentProfile from "@/components/pages/student/StudentProfile";
import StudentTable from "@/components/pages/student/StudentTable";

import getOrdinalSemester from "@/utils/custom/getOrdinalSemester";

export async function generateMetadata({
  params,
}: {
  params: { sem: string; usn: string };
}): Promise<Metadata> {
  const studentName = await Student.getStudentName(params.usn);
  const semester = `${getOrdinalSemester(params.sem)} Semester`;

  return {
    title: `${studentName} - ${semester} | Grade Grove`,
    description: `Discover detailed information on ${studentName} of USN ${params.usn}, including all marks and grades attained during ${semester}. This page offers a comprehensive overview of academic performance, providing insight into individual achievements and facilitating efficient monitoring of student progress`,
    metadataBase: new URL("https://grade-grove.soorya-u.dev"),
  };
}

async function Profile({ params }: { params: { sem: string; usn: string } }) {
  const [heading, details, scores] = await Student.getStudent(
    params.sem,
    params.usn
  );

  if (details instanceof Error)
    return <h1>{JSON.stringify(details.message)}</h1>;

  return (
    <>
      <StudentHeading data={heading} />
      <section className="w-full flex flex-col xl:flex-row justify-center items-center bg-transparent px-4 gap-28">
        <StudentProfile semester={params.sem} usn={params.usn} data={details} />
        <StudentTable data={scores} />
      </section>
    </>
  );
}

export default Profile;
