import { PrismaClient, Student } from "@prisma/client";

import students from "../data/v2/students.json";
import semesters from "../data/v2/semesters.json";

import subjects from "../data/v2/subjects.json";

import fis_marks from "../data/v2/1st_sem.json";
import ss_marks from "../data/v2/2nd_sem.json";
import ts_marks from "../data/v2/3rd_sem.json";
import fos_marks from "../data/v2/4th_sem.json";

import results from "../data/v2/results.json";

const dbClient = new PrismaClient();

async function deleteAll() {
  await dbClient.marks.deleteMany({});
  await dbClient.result.deleteMany({});
  await dbClient.subject.deleteMany({});
  await dbClient.student.deleteMany({});
  await dbClient.semester.deleteMany({});
}

async function insertStudent() {
  await dbClient.student.createMany({
    data: students as unknown as Student,
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
  // @ts-ignore - Top level await
  await deleteAll();
  // @ts-ignore - Top level await
  await insertStudent();
  // @ts-ignore - Top level await
  await insertSemester();
  // @ts-ignore - Top level await
  await insertSubject();
  // @ts-ignore - Top level await
  await insertMarks();
  // @ts-ignore - Top level await
  await insertResult();
} catch (err) {
  console.log("Error: ", err);
} finally {
  dbClient.$disconnect();
}
