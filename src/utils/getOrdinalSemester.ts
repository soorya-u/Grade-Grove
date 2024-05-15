export default function getOrdinalSemester(semester: string) {
  switch (semester) {
    case "first":
      return "First";
    case "second":
      return "Second";
    case "third":
      return "Third";
    case "fourth":
      return "Fourth";
  }
}
