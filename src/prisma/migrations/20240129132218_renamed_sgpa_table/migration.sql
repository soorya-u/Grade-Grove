/*
  Warnings:

  - You are about to drop the `SGPA` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SGPA" DROP CONSTRAINT "SGPA_semester_number_fkey";

-- DropForeignKey
ALTER TABLE "SGPA" DROP CONSTRAINT "SGPA_student_usn_fkey";

-- DropTable
DROP TABLE "SGPA";

-- CreateTable
CREATE TABLE "RESULT" (
    "id" TEXT NOT NULL,
    "sgpa" DOUBLE PRECISION NOT NULL,
    "totalMarks" INTEGER NOT NULL,
    "student_usn" TEXT NOT NULL,
    "semester_number" TEXT NOT NULL,

    CONSTRAINT "RESULT_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RESULT" ADD CONSTRAINT "RESULT_student_usn_fkey" FOREIGN KEY ("student_usn") REFERENCES "STUDENT"("usn") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RESULT" ADD CONSTRAINT "RESULT_semester_number_fkey" FOREIGN KEY ("semester_number") REFERENCES "SEMESTER"("semester_number") ON DELETE RESTRICT ON UPDATE CASCADE;
