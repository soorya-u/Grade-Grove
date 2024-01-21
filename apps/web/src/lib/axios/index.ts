import axios from "axios";

import { IRankers, IStudent } from "@/interface";

export async function getSemResults(sem: string) {
  return await axios.get<IRankers>(`/api/${sem}`);
}

export async function getUsnResult(sem: string, usn: string) {
  return await axios.get<IStudent>(`/api/${sem}/${usn}`);
}
