import { $Enums } from "@prisma/client";

import dbClient from "@/lib/db"
import students from "./data/v2/students.json";
import semesters from "./data/v2/semesters.json";
import subjects from "./data/v2/subjects.json";
import fis_marks from "./data/v2/1st_sem.json";
import ss_marks from "./data/v2/2nd_sem.json";
import ts_marks from "./data/v2/3rd_sem.json";
import fos_marks from "./data/v2/4th_sem.json";
import results from "./data/v2/results.json";

const getCycle = (cycle: string): $Enums.Cycle => $Enums.Cycle[cycle as keyof typeof $Enums.Cycle]

type TransactionClient = Parameters<Parameters<typeof dbClient.$transaction>[0]>[0];

async function deleteAll(tx: TransactionClient) {
  await tx.marks.deleteMany({});
  await tx.result.deleteMany({});
  await tx.subject.deleteMany({});
  await tx.student.deleteMany({});
  await tx.semester.deleteMany({});
}

async function insertStudent(tx: TransactionClient) {
  await tx.student.createMany({
    data: [
      ...students.map(s => ({ ...s, cycle: getCycle(s.cycle!) }))
    ]
  });
}

async function insertSemester(tx: TransactionClient) {
  await tx.semester.createMany({
    data: semesters,
  });
}

async function insertSubject(tx: TransactionClient) {

  const promises = subjects.map(async (sub) => {
    if (typeof sub.semester === "string")
      await tx.subject.create({
        data: {
          subjectCode: sub.subjectCode,
          subjectCredits: sub.subjectCredits,
          subjectName: sub.subjectName,
          semester: {
            connect: [{ semesterNumber: sub.semester }],
          },
        },
      });
    else
      await tx.subject.create({
        data: {
          subjectCode: sub.subjectCode,
          subjectCredits: sub.subjectCredits,
          subjectName: sub.subjectName,
          semester: {
            connect: [
              { semesterNumber: sub.semester[0] },
              { semesterNumber: sub.semester[1] },
            ],
          },
        },
      });
  })

  await Promise.all(promises)

}

async function insertMarks(tx: TransactionClient) {
  await tx.marks.createMany({
    data: [...fis_marks, ...ss_marks, ...ts_marks, ...fos_marks],
  });
}

async function insertResult(tx: TransactionClient) {
  await tx.result.createMany({ data: results, });
}

async function main() {
  await dbClient.$transaction(async (tx) => {
    await deleteAll(tx);
    await insertStudent(tx);
    await insertSemester(tx);
    await insertSubject(tx);
    await insertMarks(tx);
    await insertResult(tx);
  }, { timeout: 15000 })
}

main()
  .then(() => console.log("Transaction Successfull"))
  .catch((err) => console.log("Error: ", err))
  .finally(() => dbClient.$disconnect());