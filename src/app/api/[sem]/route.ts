import { NextRequest, NextResponse } from "next/server";

import { FirstSem, SecondSem, ThirdSem } from "@/lib/mongoose/models/sem";
import { connect } from "@/lib/mongoose";

export async function GET(
  req: NextRequest,
  { params }: { params: { sem: string } },
) {
  const sem = params.sem;
  const URI = process.env.DATABASE_URL;

  if (!URI) return NextResponse.json({ error: "Cannot Get Backend URI" });

  connect(URI);

  let semResults;

  switch (sem) {
    case "first-sem":
      semResults = await FirstSem.findOne({});
      break;

    case "second-sem":
      semResults = await SecondSem.findOne({});
      break;

    case "third-sem":
      semResults = await ThirdSem.findOne({});
      break;
  }

  if (!semResults) return NextResponse.json({ error: "Invalid Endpoint" });
  return NextResponse.json(semResults?.rank);
}
