type Subject = {
  _id: string;
  subject: string;
  subject_code: string;
  int_marks: number;
  ext_marks: number;
  total_marks: number;
};

export type Student = {
  _id: string;
  name: string;
  usn: string;
  subjects: Subject[];
  total: number;
  spga: number;
};

export type Rankers = Student[];
