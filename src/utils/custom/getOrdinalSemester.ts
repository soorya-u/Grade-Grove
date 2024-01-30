export default function getOrdinalSemester(semester: string) {
  switch (semester) {
    case "first-sem":
      return "First";
    case "second-sem":
      return "Second";
    case "third-sem":
      return "Third";
  }
}
