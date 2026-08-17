import { NextFunction } from "express";
import { CustomError } from "../errors/customError.error";

/**
 * Mongoose doesn't reject a duplicate unique-index write until MongoDB itself
 * throws E11000, and `runValidators`/schema validation failures come back as
 * ValidationError/CastError — left uncaught, both reach the global error
 * handler as a raw 500 with an internal Mongo/Mongoose message instead of a
 * client-actionable 400. This normalizes both into the same friendly 400 the
 * pre-checks already use, and forwards anything else untouched.
 */
export function forwardMongoError(error: any, next: NextFunction): void {
  if (error?.code === 11000) {
    const field = Object.keys(error.keyPattern || {})[0] || "campo";
    next(new CustomError(`Ya existe un registro con ese ${field}`, 400));
    return;
  }
  if (error?.name === "ValidationError" || error?.name === "CastError") {
    next(new CustomError(error.message, 400));
    return;
  }
  next(error);
}
