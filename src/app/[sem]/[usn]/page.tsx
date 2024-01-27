"use client";

import { useEffect, useState } from "react";

import { getUsnResult } from "@/lib/axios";

import { IStudent } from "@/interface";

import StudentHeading from "@/components/pages/student/StudentHeading";
import StudentProfile from "@/components/pages/student/StudentProfile";
import StudentTable from "@/components/pages/student/StudentTable";

function Profile({
  params,
  searchParams,
}: {
  params: { sem: string; usn: string };
  searchParams: { rank: string };
}) {
  const [student, setStudent] = useState<IStudent>();

  useEffect(() => {
    const fetchData = async () => {
      getUsnResult(params.sem, params.usn).then((res) => setStudent(res.data));
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="flex flex-col justify-center items-center gap-7">
        <StudentHeading rank={searchParams.rank} name={student?.name || ""} />
        <section className="w-full flex flex-col xl:flex-row justify-center items-center bg-transparent px-4 gap-28">
          <StudentProfile semester={params.sem} student={student} />
          <StudentTable student={student} />
        </section>
      </main>
    </>
  );
}

export default Profile;
