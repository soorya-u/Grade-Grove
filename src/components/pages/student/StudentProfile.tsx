import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";
import { IStudent } from "@/interface";

const sem = {
  "first-sem": "First",
  "second-sem": "Second",
  "third-sem": "Third",
};

function StudentProfile({
  semester,
  student,
}: {
  semester: string;
  student: IStudent | undefined;
}) {
  return (
    <section className="w-1/4 min-w-[250px] sm:min-w-[400px] min-h-[375px] bg-[#00000026] border border-white rounded-[0.45rem] shadow shadow-[#00000026] p-4">
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <Avatar className="h-[60%] w-[60%] aspect-square border-2 border-[#ccc]">
          <AvatarImage src={`/rankers/${student?.usn}.jpg`} />
          <AvatarFallback>{student?.usn}</AvatarFallback>
        </Avatar>
        <div className="grid grid-cols-2 gap-x-4">
          <h3 className="text-right text-lg font-bold">Name: </h3>
          <h3 className="text-lg">{student?.name}</h3>
          <h3 className="text-right text-lg font-bold">USN: </h3>
          <h3 className="text-lg">{student?.usn}</h3>
          <h3 className="text-right text-lg font-bold">Semester: </h3>
          <h3>{sem[semester as keyof typeof sem]}</h3>
          {student?.cycle && (
            <>
              <h3 className="text-right text-lg font-bold">Cycle: </h3>
              <h3 className="text-lg">{student.cycle}</h3>
            </>
          )}
          <h3 className="text-right text-lg font-bold">Total Marks: </h3>
          <h3 className="text-lg">{student?.total}</h3>
          <h3 className="text-right text-lg font-bold">SGPA: </h3>
          <h3 className="text-lg">{student?.spga}</h3>
        </div>
      </div>
    </section>
  );
}

export default StudentProfile;
