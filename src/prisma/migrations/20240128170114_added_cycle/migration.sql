/*
  Warnings:

  - The primary key for the `SEMESTER` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- CreateEnum
CREATE TYPE "Cycle" AS ENUM ('Physics', 'Chemistry');

-- DropForeignKey
ALTER TABLE "SGPA" DROP CONSTRAINT "SGPA_semester_number_fkey";

-- DropForeignKey
ALTER TABLE "SUBJECT" DROP CONSTRAINT "SUBJECT_semester_number_fkey";

-- AlterTable
ALTER TABLE "SEMESTER" DROP CONSTRAINT "SEMESTER_pkey",
ALTER COLUMN "semester_number" DROP DEFAULT,
ALTER COLUMN "semester_number" SET DATA TYPE TEXT,
ADD CONSTRAINT "SEMESTER_pkey" PRIMARY KEY ("semester_number");
DROP SEQUENCE "SEMESTER_semester_number_seq";

-- AlterTable
ALTER TABLE "SGPA" ALTER COLUMN "semester_number" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "STUDENT" ADD COLUMN     "cycle" "Cycle";

-- AlterTable
ALTER TABLE "SUBJECT" ALTER COLUMN "semester_number" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "SUBJECT" ADD CONSTRAINT "SUBJECT_semester_number_fkey" FOREIGN KEY ("semester_number") REFERENCES "SEMESTER"("semester_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SGPA" ADD CONSTRAINT "SGPA_semester_number_fkey" FOREIGN KEY ("semester_number") REFERENCES "SEMESTER"("semester_number") ON DELETE RESTRICT ON UPDATE CASCADE;
