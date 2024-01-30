-- CreateTable
CREATE TABLE "STUDENT" (
    "full_name" TEXT NOT NULL,
    "usn" TEXT NOT NULL,
    "cgpa" DOUBLE PRECISION,

    CONSTRAINT "STUDENT_pkey" PRIMARY KEY ("usn")
);

-- CreateTable
CREATE TABLE "SEMESTER" (
    "semester_number" SERIAL NOT NULL,
    "semester_credits" INTEGER NOT NULL,

    CONSTRAINT "SEMESTER_pkey" PRIMARY KEY ("semester_number")
);

-- CreateTable
CREATE TABLE "SUBJECT" (
    "subject_name" TEXT NOT NULL,
    "subject_code" TEXT NOT NULL,
    "subject_credits" INTEGER NOT NULL,
    "semester_number" INTEGER NOT NULL,

    CONSTRAINT "SUBJECT_pkey" PRIMARY KEY ("subject_code")
);

-- CreateTable
CREATE TABLE "MARKS" (
    "id" TEXT NOT NULL,
    "internal_marks" DOUBLE PRECISION NOT NULL,
    "external_marks" DOUBLE PRECISION NOT NULL,
    "revaluation_marks" DOUBLE PRECISION,
    "total_marks" DOUBLE PRECISION NOT NULL,
    "subject_code" TEXT NOT NULL,
    "semester_number" INTEGER NOT NULL,
    "student_usn" TEXT NOT NULL,

    CONSTRAINT "MARKS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SGPA" (
    "id" TEXT NOT NULL,
    "sgpa" DOUBLE PRECISION NOT NULL,
    "student_usn" TEXT NOT NULL,
    "semester_number" INTEGER NOT NULL,

    CONSTRAINT "SGPA_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SUBJECT" ADD CONSTRAINT "SUBJECT_semester_number_fkey" FOREIGN KEY ("semester_number") REFERENCES "SEMESTER"("semester_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MARKS" ADD CONSTRAINT "MARKS_subject_code_fkey" FOREIGN KEY ("subject_code") REFERENCES "SUBJECT"("subject_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MARKS" ADD CONSTRAINT "MARKS_semester_number_fkey" FOREIGN KEY ("semester_number") REFERENCES "SEMESTER"("semester_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MARKS" ADD CONSTRAINT "MARKS_student_usn_fkey" FOREIGN KEY ("student_usn") REFERENCES "STUDENT"("usn") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SGPA" ADD CONSTRAINT "SGPA_student_usn_fkey" FOREIGN KEY ("student_usn") REFERENCES "STUDENT"("usn") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SGPA" ADD CONSTRAINT "SGPA_semester_number_fkey" FOREIGN KEY ("semester_number") REFERENCES "SEMESTER"("semester_number") ON DELETE RESTRICT ON UPDATE CASCADE;
