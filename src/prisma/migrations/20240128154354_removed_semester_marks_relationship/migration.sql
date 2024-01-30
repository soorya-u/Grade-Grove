/*
  Warnings:

  - You are about to drop the column `semester_number` on the `MARKS` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MARKS" DROP CONSTRAINT "MARKS_semester_number_fkey";

-- AlterTable
ALTER TABLE "MARKS" DROP COLUMN "semester_number";
