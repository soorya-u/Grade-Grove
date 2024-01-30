import { Student } from "@/services/student";

import StudentHeading from "@/components/pages/student/StudentHeading";
import StudentProfile from "@/components/pages/student/StudentProfile";
import StudentTable from "@/components/pages/student/StudentTable";

async function Profile({ params }: { params: { sem: string; usn: string } }) {
  const [details, scores] = await Student.getStudent(params.sem, params.usn);

  if (details instanceof Error)
    return <h1>{JSON.stringify(details.message)}</h1>;

  return (
    <>
      <StudentHeading rank={1} name={"Soorya"} />
      <section className="w-full flex flex-col xl:flex-row justify-center items-center bg-transparent px-4 gap-28">
        <StudentProfile semester={params.sem} usn={params.usn} data={details} />
        <StudentTable data={scores} />
      </section>
    </>
  );
}

export default Profile;
