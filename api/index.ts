// Debe ser el primer import: en local (p. ej. `vercel dev`) carga el .env
// antes de que ../src/app y sus dependencias lean process.env al importarse.
// En Vercel en producción las env vars ya están inyectadas, así que esto es un no-op.
import "dotenv/config";
import { dbConnect } from "../src/config/mongo";
import { createApp } from "../src/app";

const { app } = createApp();

export default async function handler(req: any, res: any) {
  // dbConnect() no-ops once mongoose.connection.readyState is already >=1,
  // and now throws (instead of silently swallowing) if the connection
  // attempt fails, so a failed connection is retried on the next request
  // instead of being permanently (and incorrectly) marked as connected.
  await dbConnect();
  return app(req, res);
}
