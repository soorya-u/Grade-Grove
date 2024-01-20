import axios from "axios";

import { Rankers } from "@/interface";

export async function getSemResults(sem: string) {
  return await axios.get<Rankers>(`/api/${sem}`);
}
