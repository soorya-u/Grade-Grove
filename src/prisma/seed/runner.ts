// @ts-nocheck

import { $Enums } from "@prisma/client";
import dbClient from "@/lib/db";
import { TCacheValue } from "./types";

type TransactionClient = Parameters<Parameters<typeof dbClient.$transaction>[0]>[0];

export class Seeder {

  private val: TCacheValue;
  private timeout = 15000;

  private constructor(val: TCacheValue) { this.val = val; }

  public static async build() {
    const students = (await import("./data/v2/students.json")).default;
    const semesters = (await import("./data/v2/semesters.json")).default;
    const subjects = (await import("./data/v2/subjects.json")).default;
    const fis_marks = (await import("./data/v2/1st_sem.json")).default;
    const ss_marks = (await import("./data/v2/2nd_sem.json")).default;
    const ts_marks = (await import("./data/v2/3rd_sem.json")).default;
    const fos_marks = (await import("./data/v2/4th_sem.json")).default;
    const results = (await import("./data/v2/results.json")).default;

    return new Seeder({ students, semesters, subjects, fis_marks, ss_marks, ts_marks, fos_marks, results })
  }

  public async run() {
    await dbClient.$transaction(async (tx) => {
      await this.deleteAll(tx);
      await this.insertStudent(tx);
      await this.insertSemester(tx);
      await this.insertSubject(tx);
      await this.insertMarks(tx);
      await this.insertResult(tx);
    }, { timeout: this.timeout })
      .then(() => console.log("Transaction Successfull"))
      .catch((err) => console.error("Error: ", err))
      .finally(() => dbClient.$disconnect());
  }

  public static async exec() {
    const seeder = await this.build()
    await seeder.run()
  }

  private getCycle = (cycle: string): $Enums.Cycle => $Enums.Cycle[cycle as keyof typeof $Enums.Cycle]

  private async deleteAll(tx: TransactionClient) {
    await tx.marks.deleteMany({});
    await tx.result.deleteMany({});
    await tx.subject.deleteMany({});
    await tx.student.deleteMany({});
    await tx.semester.deleteMany({});
  }

  private async insertStudent(tx: TransactionClient) {
    await tx.student.createMany({
      data:
        this.val.students.map(s => ({ ...s, cycle: s.cycle ? this.getCycle(s.cycle) : null }))
    });
  }


  private async insertSemester(tx: TransactionClient) {
    await tx.semester.createMany({
      data: this.val.semesters,
    });
  }

  private async insertSubject(tx: TransactionClient) {

    const promises = this.val.subjects.map(async (sub) => {
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

  private async insertMarks(tx: TransactionClient) {
    await tx.marks.createMany({
      data: [...this.val.fis_marks, ...this.val.ss_marks, ...this.val.ts_marks, ...this.val.fos_marks],
    });
  }

  private async insertResult(tx: TransactionClient) {
    await tx.result.createMany({ data: this.val.results });
  }
}
