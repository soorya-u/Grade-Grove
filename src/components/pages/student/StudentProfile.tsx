import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/primitives/avatar";

import { IStudentDetails } from "@/types/student";

import getOrdinalSemester from "@/utils/getOrdinalSemester";
import getImagePath from "@/utils/getImagePath";

function StudentProfile({
  semester,
  usn,
  data,
}: {
  semester: string;
  usn: string;
  data: IStudentDetails;
}) {
  return (
    <section className="min-h-[375px] w-1/4 min-w-[250px] rounded-[0.45rem] border border-white bg-[#00000026] p-4 shadow shadow-[#00000026] sm:min-w-[400px]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <Avatar className="aspect-square h-[60%] w-[60%] border-2 border-[#ccc]">
          <AvatarImage src={getImagePath(usn)} />
          <AvatarFallback>{usn}</AvatarFallback>
        </Avatar>
        <div className="grid grid-cols-2 gap-x-4">
          <h3 className="text-right text-lg font-bold">Name: </h3>
          <h3 className="text-lg">{data.name}</h3>
          <h3 className="text-right text-lg font-bold">USN: </h3>
          <h3 className="text-lg">{usn}</h3>
          <h3 className="text-right text-lg font-bold">Semester: </h3>
          <h3 className="text-lg">{getOrdinalSemester(semester)}</h3>
          {data.cycle && (
            <>
              <h3 className="text-right text-lg font-bold">Cycle: </h3>
              <h3 className="text-lg">{data.cycle}</h3>
            </>
          )}
          <h3 className="text-right text-lg font-bold">Total Marks: </h3>
          <h3 className="text-lg">{data.totalMarks}</h3>
          <h3 className="text-right text-lg font-bold">SGPA: </h3>
          <h3 className="text-lg">{data.sgpa}</h3>
        </div>
      </div>
    </section>
  );
}

export default StudentProfile;
