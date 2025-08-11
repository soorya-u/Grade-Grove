/*
  Warnings:

  - You are about to drop the `ACCOUNT` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MARKS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RESULT` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SEMESTER` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SESSION` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `STUDENT` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SUBJECT` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `USER` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VERIFICATION_TOKEN` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ACCOUNT" DROP CONSTRAINT "ACCOUNT_user_id_fkey";

-- DropForeignKey
ALTER TABLE "MARKS" DROP CONSTRAINT "MARKS_student_usn_fkey";

-- DropForeignKey
ALTER TABLE "MARKS" DROP CONSTRAINT "MARKS_subject_code_fkey";

-- DropForeignKey
ALTER TABLE "RESULT" DROP CONSTRAINT "RESULT_semester_number_fkey";

-- DropForeignKey
ALTER TABLE "RESULT" DROP CONSTRAINT "RESULT_student_usn_fkey";

-- DropForeignKey
ALTER TABLE "SESSION" DROP CONSTRAINT "SESSION_user_id_fkey";

-- DropForeignKey
ALTER TABLE "_SemesterToSubject" DROP CONSTRAINT "_SemesterToSubject_A_fkey";

-- DropForeignKey
ALTER TABLE "_SemesterToSubject" DROP CONSTRAINT "_SemesterToSubject_B_fkey";

-- DropTable
DROP TABLE "ACCOUNT";

-- DropTable
DROP TABLE "MARKS";

-- DropTable
DROP TABLE "RESULT";

-- DropTable
DROP TABLE "SEMESTER";

-- DropTable
DROP TABLE "SESSION";

-- DropTable
DROP TABLE "STUDENT";

-- DropTable
DROP TABLE "SUBJECT";

-- DropTable
DROP TABLE "USER";

-- DropTable
DROP TABLE "VERIFICATION_TOKEN";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "email_verified" TIMESTAMP(3),
    "password" TEXT,
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'Normal',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("provider","provider_account_id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verification_tokens_pkey" PRIMARY KEY ("identifier","token")
);

-- CreateTable
CREATE TABLE "students" (
    "full_name" TEXT NOT NULL,
    "usn" TEXT NOT NULL,
    "cgpa" DOUBLE PRECISION,
    "cycle" "Cycle",

    CONSTRAINT "students_pkey" PRIMARY KEY ("usn")
);

-- CreateTable
CREATE TABLE "semesters" (
    "semester_number" TEXT NOT NULL,
    "semester_credits" INTEGER NOT NULL,

    CONSTRAINT "semesters_pkey" PRIMARY KEY ("semester_number")
);

-- CreateTable
CREATE TABLE "subjects" (
    "subject_name" TEXT NOT NULL,
    "subject_code" TEXT NOT NULL,
    "subject_credits" INTEGER NOT NULL,

    CONSTRAINT "subjects_pkey" PRIMARY KEY ("subject_code")
);

-- CreateTable
CREATE TABLE "marks" (
    "id" TEXT NOT NULL,
    "internal_marks" DOUBLE PRECISION NOT NULL,
    "external_marks" DOUBLE PRECISION NOT NULL,
    "revaluation_marks" DOUBLE PRECISION,
    "total_marks" DOUBLE PRECISION NOT NULL,
    "subject_code" TEXT NOT NULL,
    "student_usn" TEXT NOT NULL,

    CONSTRAINT "marks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "results" (
    "id" TEXT NOT NULL,
    "sgpa" DOUBLE PRECISION NOT NULL,
    "totalMarks" INTEGER NOT NULL,
    "student_usn" TEXT NOT NULL,
    "semester_number" TEXT NOT NULL,

    CONSTRAINT "results_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marks" ADD CONSTRAINT "marks_subject_code_fkey" FOREIGN KEY ("subject_code") REFERENCES "subjects"("subject_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marks" ADD CONSTRAINT "marks_student_usn_fkey" FOREIGN KEY ("student_usn") REFERENCES "students"("usn") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "results" ADD CONSTRAINT "results_student_usn_fkey" FOREIGN KEY ("student_usn") REFERENCES "students"("usn") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "results" ADD CONSTRAINT "results_semester_number_fkey" FOREIGN KEY ("semester_number") REFERENCES "semesters"("semester_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SemesterToSubject" ADD CONSTRAINT "_SemesterToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "semesters"("semester_number") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SemesterToSubject" ADD CONSTRAINT "_SemesterToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "subjects"("subject_code") ON DELETE CASCADE ON UPDATE CASCADE;
