import mongoose from "mongoose";
import { env } from "./env";

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(env.dbUri);
  console.log("Connected to MongoDB Atlas");
}
