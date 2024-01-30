import { IResultPayload } from "@/interface/result";
import prismaClient from "@/prisma";
import getSemesterNumber from "@/utils/custom/getSemesterNumber";

export class Result {
  public static async getResult(semester: string) {
    if (semester === "first-sem" || semester === "second-sem")
      return await Result.getFirstYearResult(getSemesterNumber(semester));
    else return await Result.getOtherYearResult(getSemesterNumber(semester));
  }

  private static async getFirstYearResult(
    semester: number
  ): Promise<IResultPayload[]> {
    const result = await prismaClient.result.findMany({
      where: {
        OR: [
          { semesterNumber: `${semester}P` },
          { semesterNumber: `${semester}C` },
        ],
      },
      orderBy: {
        totalMarks: "desc",
      },
      take: 10,
      select: {
        studentUsn: true,
        totalMarks: true,
        sgpa: true,
        student: {
          select: {
            fullName: true,
          },
        },
      },
    });

    const payload = result.map((elem, idx) => {
      return {
        rank: idx + 1,
        studentName: elem.student.fullName,
        usn: elem.studentUsn,
        totalMarks: elem.totalMarks,
        sgpa: elem.sgpa,
      };
    });

    return payload;
  }

  private static async getOtherYearResult(
    semester: number
  ): Promise<IResultPayload[]> {
    const result = await prismaClient.result.findMany({
      where: {
        OR: [{ semesterNumber: `${semester}` }],
      },
      orderBy: {
        totalMarks: "desc",
      },
      take: 10,
      select: {
        studentUsn: true,
        totalMarks: true,
        sgpa: true,
        student: {
          select: {
            fullName: true,
          },
        },
      },
    });

    const payload = result.map((elem, idx) => {
      return {
        rank: idx + 1,
        studentName: elem.student.fullName,
        usn: elem.studentUsn,
        totalMarks: elem.totalMarks,
        sgpa: elem.sgpa,
      };
    });

    return payload;
  }
}
