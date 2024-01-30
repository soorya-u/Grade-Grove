import { IStudentDetails, IStudentScores } from "@/interface/student";
import prismaClient from "@/prisma";

const semNumber = {
  "first-sem": 1,
  "second-sem": 2,
  "third-sem": 3,
};

export class Student {
  public static async getStudent(
    semester: string,
    usn: string
  ): Promise<[Error | IStudentDetails, IStudentScores[]]> {
    if (semester === "first-sem" || semester === "second-sem")
      return [
        await Student.getFirstYearStudentDetails(semNumber[semester], usn),
        await Student.getFirstYearStudentScores(semNumber[semester], usn),
      ];
    else
      return [
        await Student.getOtherYearStudentDetails(
          semNumber[semester as keyof typeof semNumber],
          usn
        ),
        await Student.getOtherYearStudentScores(
          semNumber[semester as keyof typeof semNumber],
          usn
        ),
      ];
  }

  private static async getFirstYearStudentDetails(
    semester: number,
    usn: string
  ) {
    const result = await prismaClient.student.findUnique({
      where: {
        usn,
        result: {
          some: {
            OR: [
              { semesterNumber: `${semester}P` },
              { semesterNumber: `${semester}C` },
            ],
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
        semester === 1
          ? result.cycle
          : result.cycle === "Physics"
          ? "Chemistry"
          : "Physics",
    };

    return payload;
  }
  private static async getOtherYearStudentDetails(
    semester: number,
    usn: string
  ) {
    const result = await prismaClient.student.findUnique({
      where: {
        usn,
        result: {
          some: {
            semesterNumber: `${semester}`,
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
    };

    return payload;
  }

  private static async getFirstYearStudentScores(
    semester: number,
    usn: string
  ) {
    const result = await prismaClient.marks.findMany({
      where: {
        studentUsn: usn,
        subject: {
          semester: {
            some: {
              OR: [
                {
                  semesterNumber: `${semester}P`,
                },
                {
                  semesterNumber: `${semester}C`,
                },
              ],
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
  private static async getOtherYearStudentScores(
    semester: number,
    usn: string
  ) {
    const result = await prismaClient.marks.findMany({
      where: {
        studentUsn: usn,
        subject: {
          semester: {
            some: {
              semesterNumber: `${semester}`,
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
