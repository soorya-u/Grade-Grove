import {
  IStudentHeading,
  IStudentDetails,
  IStudentScores,
} from "@/interface/student";
import prismaClient from "@/prisma";
import getSemesterNumber from "@/utils/custom/getSemesterNumber";

export class Student {
  public static async getStudent(
    semester: string,
    usn: string
  ): Promise<[IStudentHeading, Error | IStudentDetails, IStudentScores[]]> {
    const semNumber = getSemesterNumber(semester);

    const header = await Student.getStudentHeading(semNumber, usn);
    const details = await Student.getStudentDetails(semNumber, usn);
    const scores = await Student.getStudentScores(semNumber, usn);

    return [header, details, scores];
  }

  private static async getStudentHeading(
    semester: number,
    usn: string
  ): Promise<IStudentHeading> {
    const queryParams =
      semester === 1 || semester === 2
        ? [
            { semesterNumber: `${semester}P` },
            { semesterNumber: `${semester}C` },
          ]
        : [{ semesterNumber: `${semester}` }];

    const result = await prismaClient.result.findMany({
      where: {
        OR: queryParams,
      },
      orderBy: {
        totalMarks: "desc",
      },
      select: {
        student: {
          select: {
            fullName: true,
            usn: true,
          },
        },
      },
    });

    const payload = result
      .map((elem, idx) => ({ ...elem, idx }))
      .filter((elem) => elem.student.usn === usn)
      .map((elem) => ({
        rank: elem.idx + 1,
        name: elem.student.fullName,
      }));

    return payload[0];
  }

  private static async getStudentDetails(
    semester: number,
    usn: string
  ): Promise<IStudentDetails | Error> {
    const queryParams =
      semester === 1 || semester === 2
        ? [
            { semesterNumber: `${semester}P` },
            { semesterNumber: `${semester}C` },
          ]
        : [{ semesterNumber: `${semester}` }];

    const result = await prismaClient.student.findUnique({
      where: {
        usn,
        result: {
          some: {
            OR: queryParams,
          },
        },
      },
      select: {
        fullName: true,
        cycle: true,
        result: {
          select: {
            totalMarks: true,
            sgpa: true,
          },
        },
      },
    });

    if (!result) return new Error("Student Not Found");
    const payload = {
      name: result.fullName,
      totalMarks: result.result[0].totalMarks,
      sgpa: result.result[0].sgpa,
      cycle:
        (semester === 1 || semester === 2) && semester === 1
          ? result.cycle
          : result.cycle === "Physics"
          ? "Chemistry"
          : "Physics",
    };

    return payload;
  }

  private static async getStudentScores(
    semester: number,
    usn: string
  ): Promise<IStudentScores[]> {
    const queryParams =
      semester === 1 || semester === 2
        ? [
            { semesterNumber: `${semester}P` },
            { semesterNumber: `${semester}C` },
          ]
        : [{ semesterNumber: `${semester}` }];
    const result = await prismaClient.marks.findMany({
      where: {
        studentUsn: usn,
        subject: {
          semester: {
            some: {
              OR: queryParams,
            },
          },
        },
      },
      select: {
        subject: {
          select: {
            subjectName: true,
          },
        },
        subjectCode: true,
        internalMarks: true,
        externalMarks: true,
        totalMarks: true,
      },
    });

    const payload = result.map((elem) => {
      return {
        subjectName: elem.subject.subjectName,
        subjectCode: elem.subjectCode,
        internalMarks: elem.internalMarks,
        externalMarks: elem.externalMarks,
        totalMarks: elem.totalMarks,
      };
    });

    return payload;
  }
}
