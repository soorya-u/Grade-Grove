type ISubject = {
  _id: string;
  subject: string;
  subject_code: string;
  int_marks: number;
  ext_marks: number;
  total_marks: number;
};

export type IStudent = {
  _id: string;
  name: string;
  usn: string;
  cycle?: string;
  subjects: ISubject[];
  total: number;
  spga: number;
};

export type IRankers = IStudent[];
