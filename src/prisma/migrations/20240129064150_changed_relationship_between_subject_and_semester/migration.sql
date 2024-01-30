-- DropForeignKey
ALTER TABLE "SUBJECT" DROP CONSTRAINT "SUBJECT_semester_number_fkey";

-- CreateTable
CREATE TABLE "_SemesterToSubject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SemesterToSubject_AB_unique" ON "_SemesterToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_SemesterToSubject_B_index" ON "_SemesterToSubject"("B");

-- AddForeignKey
ALTER TABLE "_SemesterToSubject" ADD CONSTRAINT "_SemesterToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "SEMESTER"("semester_number") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SemesterToSubject" ADD CONSTRAINT "_SemesterToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "SUBJECT"("subject_code") ON DELETE CASCADE ON UPDATE CASCADE;
