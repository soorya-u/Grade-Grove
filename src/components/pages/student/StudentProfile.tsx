import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";

import { IStudentDetails } from "@/interface/student";

import getOrdinalSemester from "@/utils/custom/getOrdinalSemester";
import getImagePath from "@/utils/custom/getImagePath";

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
    <section className="w-1/4 min-w-[250px] sm:min-w-[400px] min-h-[375px] bg-[#00000026] border border-white rounded-[0.45rem] shadow shadow-[#00000026] p-4">
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <Avatar className="h-[60%] w-[60%] aspect-square border-2 border-[#ccc]">
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
