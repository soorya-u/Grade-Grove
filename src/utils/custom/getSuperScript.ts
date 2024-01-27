export default function getSuperScript(rank: number) {
  if (rank == 1) return "st";
  else if (rank == 2) return "nd";
  else if (rank == 3) return "rd";
  else return "th";
}
