import dotenv from "dotenv";
import { dbConnect } from "../src/config/mongo";
import { createApp } from "../src/app";

dotenv.config();

let isConnected = false;

const { app } = createApp();

export default async function handler(req: any, res: any) {
  if (!isConnected) {
    await dbConnect();
    isConnected = true;
  }
  return app(req, res);
}
