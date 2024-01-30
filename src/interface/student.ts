import { $Enums } from "@prisma/client";

export type IStudentHeading = {
  rank: number;
  name: string;
};

export type IStudentDetails = {
  name: string;
  totalMarks: number;
  sgpa: number;
  cycle?: $Enums.Cycle | null;
};

export type IStudentScores = {
  subjectName: string;
  subjectCode: string;
  internalMarks: number;
  externalMarks: number;
  totalMarks: number;
};
