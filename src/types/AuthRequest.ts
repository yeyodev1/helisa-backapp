import { Request } from "express";

export interface JwtPayload {
  userId: string;
  email: string;
  role: "admin" | "user";
}

export interface AuthRequest extends Request {
  user?: JwtPayload;
}
