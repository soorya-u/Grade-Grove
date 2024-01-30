import { IResultPayload } from "@/interface/result";
import prismaClient from "@/prisma";

export class Result {
  public static async getResult(semester: string) {
    const semNumber = {
      "first-sem": 1,
      "second-sem": 2,
      "third-sem": 3,
    };

    if (semester === "first-sem" || semester === "second-sem")
      return Result.getFirstYearResult(semNumber[semester]);
    else
      return Result.getOtherYearResult(
        semNumber[semester as keyof typeof semNumber]
      );
  }

  private static async getFirstYearResult(
    semester: number
  ): Promise<[number, IResultPayload[]]> {
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

    return [semester, payload];
  }

  private static async getOtherYearResult(
    semester: number
  ): Promise<[number, IResultPayload[]]> {
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

    return [semester, payload];
  }
}
