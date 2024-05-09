export default function getSemesterNumber(semester: string) {
  switch (semester) {
    case "first":
      return 1;
    case "second":
      return 2;
    case "third":
      return 3;
    case "fourth":
      return 4;
    default:
      return 0;
  }
}
