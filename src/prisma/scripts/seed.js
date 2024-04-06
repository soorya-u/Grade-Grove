const { PrismaClient } = require("@prisma/client");

const dbClient = new PrismaClient();

const students = require("../data/v2/students.json");
const semesters = require("../data/v2/semesters.json");
const subjects = require("../data/v2/subjects.json");
const fis_marks = require("../data/v2/1st_sem.json");
const ss_marks = require("../data/v2/2nd_sem.json");
const ts_marks = require("../data/v2/3rd_sem.json");
const fos_marks = require("../data/v2/4th_sem.json");
const results = require("../data/v2/results.json");

async function deleteAll() {
  await dbClient.marks.deleteMany({});
  await dbClient.result.deleteMany({});
  await dbClient.subject.deleteMany({});
  await dbClient.student.deleteMany({});
  await dbClient.semester.deleteMany({});
}

async function insertStudent() {
  await dbClient.student.createMany({
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

async function main() {
  await deleteAll();
  await insertStudent();
  await insertSemester();
  await insertSubject();
  await insertMarks();
  await insertResult();
}

main()
  .then(() => console.log("Transaction Successfull"))
  .catch(() => console.log("Error: ", err))
  .finally(() => dbClient.$disconnect());
