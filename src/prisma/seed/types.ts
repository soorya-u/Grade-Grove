type TSubject = {
  subjectName: string;
  subjectCode: string;
  subjectCredits: number;
  semester: string | string[];
};

type TMark = {
  studentUsn: string;
  subjectCode: string;
  internalMarks: number;
  externalMarks: number;
  totalMarks: number;
}

type TResult = {
  studentUsn: string;
  semesterNumber: string;
  sgpa: number;
  totalMarks: number;
}


type TStudent = {
  fullName: string;
  usn: string;
  cycle: string | null;
}

type TSemester = {
  semesterNumber: string;
  semesterCredits: number;
}

export type TCacheValue = {
  students: TStudent[],
  semesters: TSemester[],
  subjects: TSubject[],
  fis_marks: TMark[], ss_marks: TMark[],
  ts_marks: TMark[],
  fos_marks: TMark[],
  results: TResult[]
}