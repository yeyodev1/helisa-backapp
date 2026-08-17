import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { AuthRequest, JwtPayload } from "../types/AuthRequest";

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, env.jwtSecret) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
    return;
  }
}

// Debe usarse después de authMiddleware. Sin esto, cualquier cuenta autenticada
// (incluida una con role "user") podía crear/editar/eliminar cualquier recurso,
// incluidos otros usuarios y auto-promoverse a admin.
export function requireAdmin(req: AuthRequest, res: Response, next: NextFunction) {
  if (req.user?.role !== "admin") {
    res.status(403).json({ message: "No tienes permisos para realizar esta acción" });
    return;
  }
  next();
}
