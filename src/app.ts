import express from "express";
import cors from "cors";
import http from "http";
import routerApi from "./routes";
import { globalErrorHandler } from "./middlewares/globalErrorHandler.middleware";

const whitelist = [
  "http://localhost:8100",
  "http://localhost:8080",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:8101",
  "https://helisa.netlify.app",
  "http://helisa.netlify.app",
  "https://helisa.com.ec",
  "https://helisa.com.ec/",
  "http://helisa.com.ec",
];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (
      !origin ||
      whitelist.includes(origin) ||
      origin.includes("netlify.app") ||
      origin.includes("vercel.app") ||
      origin.includes("helisa.com.ec")
    ) {
      callback(null, true);
    } else {
      callback(null, true);
    }
  },
  credentials: true,
};

export function createApp() {
  const app = express();

  app.use(cors(corsOptions));
  app.use(express.json({ limit: "50mb" }));

  app.get("/", (_req, res) => {
    res.send("Server is alive");
  });

  routerApi(app);

  app.use(globalErrorHandler);

  const server = http.createServer(app);

  return { app, server };
}
