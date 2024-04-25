import { IResultPayload } from "@/types/result";
import prismaClient from "@/lib/db";
import getSemesterNumber from "@/utils/getSemesterNumber";

export class Result {
  public static async getResult(semester: string): Promise<IResultPayload[]> {
    const semNumber = getSemesterNumber(semester);
    const queryParams =
      semester === "first-sem" || semester === "second-sem"
        ? [
            { semesterNumber: `${semNumber}P` },
            { semesterNumber: `${semNumber}C` },
          ]
        : [{ semesterNumber: `${semNumber}` }];

    const result = await prismaClient.result.findMany({
      where: {
        OR: queryParams,
      },
      orderBy: {
        totalMarks: "desc",
      },
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
