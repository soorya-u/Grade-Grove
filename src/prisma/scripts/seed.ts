import { PrismaClient, Student } from "@prisma/client";
import env from "@/schema/env";

const dbClient = new PrismaClient();

if (env.BUN_ENV === "production") process.exit(0);

const { default: students } = await import("../data/v2/students.json");
const { default: semesters } = await import("../data/v2/semesters.json");
const { default: subjects } = await import("../data/v2/subjects.json");
const { default: fis_marks } = await import("../data/v2/1st_sem.json");
const { default: ss_marks } = await import("../data/v2/2nd_sem.json");
const { default: ts_marks } = await import("../data/v2/3rd_sem.json");
const { default: fos_marks } = await import("../data/v2/4th_sem.json");
const { default: results } = await import("../data/v2/results.json");

async function deleteAll() {
  await dbClient.marks.deleteMany({});
  await dbClient.result.deleteMany({});
  await dbClient.subject.deleteMany({});
  await dbClient.student.deleteMany({});
  await dbClient.semester.deleteMany({});
}

async function insertStudent() {
  await dbClient.student.createMany({
    // @ts-ignore
    data: students,
  });
}

async function insertSemester() {
  await dbClient.semester.createMany({
    data: semesters,
  });
}

async function insertSubject() {
  subjects.map(async (sub) => {
    if (typeof sub.semester === "string")
      await dbClient.subject.create({
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
      await dbClient.subject.create({
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
  });
}

async function insertMarks() {
  await dbClient.marks.createMany({
    data: [...fis_marks, ...ss_marks, ...ts_marks, ...fos_marks],
  });
}

async function insertResult() {
  await dbClient.result.createMany({
    data: results,
  });
}

try {
  await deleteAll();
  await insertStudent();
  await insertSemester();
  await insertSubject();
  await insertMarks();
  await insertResult();
} catch (err) {
  console.log("Error: ", err);
} finally {
  dbClient.$disconnect();
}
