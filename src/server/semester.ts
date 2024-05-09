"use server";

import prismaClient from "@/lib/db";

export async function getSemesterDetails() {
  const semesters = await prismaClient.semester.findMany({
    where: {
      NOT: {
        OR: [{ semesterNumber: "1P" }, { semesterNumber: "2P" }],
      },
    },
    include: {
      _count: true,
    },
  });

  const payload = semesters.map((sem) => ({
    semesterNumber: sem.semesterNumber[0],
    semesterCredits: sem.semesterCredits,
    noOfSubjects: sem._count.subjects,
  }));

  return payload;
}
