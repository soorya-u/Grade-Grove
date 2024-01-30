export default function getSemesterNumber(semester: string) {
  switch (semester) {
    case "first-sem":
      return 1;
    case "second-sem":
      return 2;
    case "third-sem":
      return 3;
    default:
      return 0;
  }
}
