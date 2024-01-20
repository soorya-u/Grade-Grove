import mongoose from "mongoose";

export async function connect(url: string | undefined) {

  if (url) return await mongoose.connect(url, { dbName: "Top-Ten" });
}
