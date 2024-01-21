import { NextRequest, NextResponse } from "next/server";

import { FirstSem, SecondSem, ThirdSem } from "@/lib/mongoose/models/sem";
import { connect } from "@/lib/mongoose";

export async function GET(
  req: NextRequest,
  { params }: { params: { sem: string; usn: string } },
) {
  const sem = params.sem;
  const usn = params.usn;
  const URI = process.env.DATABASE_URL;

  if (!URI) return NextResponse.json({ error: "Cannot Get Backend URI" });

  connect(URI);

  let usnResult;

  switch (sem) {
    case "first-sem":
      usnResult = await FirstSem.findOne({ "rank.usn": usn }, { "rank.$": 1 });
      break;

    case "second-sem":
      usnResult = await SecondSem.findOne({ "rank.usn": usn }, { "rank.$": 1 });
      break;

    case "third-sem":
      usnResult = await ThirdSem.findOne({ "rank.usn": usn }, { "rank.$": 1 });
      break;
  }

  if (!usnResult)
    return NextResponse.json({
      error: "No Match Found",
    });

  return NextResponse.json(usnResult?.rank[0]);
}
