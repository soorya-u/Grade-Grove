import { notFound, redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { getStudent } from "@/server/student";

import StudentHeading from "@/components/pages/student/student-heading";
import StudentProfile from "@/components/pages/student/student-profile";
import StudentTable from "@/components/pages/student/student-table";

async function Profile({ params }: { params: { sem: string; usn: string } }) {
  const session = await auth();
  if (!session || !session.user)
    return redirect(`/auth/signup?callbackUrl=/semester/${params.sem}/${params.usn}`);

  const [heading, details, scores] = await getStudent(params.sem, params.usn);

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
