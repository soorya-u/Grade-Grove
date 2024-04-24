import { notFound } from "next/navigation";

import { Student } from "@/services/student";

import StudentHeading from "@/components/pages/student/StudentHeading";
import StudentProfile from "@/components/pages/student/StudentProfile";
import StudentTable from "@/components/pages/student/StudentTable";

async function Profile({ params }: { params: { sem: string; usn: string } }) {
  const [heading, details, scores] = await Student.getStudent(
    params.sem,
    params.usn,
  );

  if (details instanceof Error) return notFound();

  return (
    <>
      <StudentHeading data={heading} />
      <section className="flex w-full flex-col items-center justify-center gap-28 bg-transparent px-4 xl:flex-row">
        <StudentProfile semester={params.sem} usn={params.usn} data={details} />
        <StudentTable data={scores} />
      </section>
    </>
  );
}

export default Profile;
