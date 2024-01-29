/*
  Warnings:

  - Added the required column `totalMarks` to the `SGPA` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SGPA" ADD COLUMN     "totalMarks" INTEGER NOT NULL;
