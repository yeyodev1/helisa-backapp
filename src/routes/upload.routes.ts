import { Router, Request } from "express";
import multer, { FileFilterCallback } from "multer";
import { uploadImage } from "../controllers/upload.controller";
import { authMiddleware, requireAdmin } from "../middlewares/auth.middleware";
import { CustomError } from "../errors/customError.error";

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (!file.mimetype.startsWith("image/")) {
      cb(new CustomError("Solo se permiten archivos de imagen", 400));
      return;
    }
    cb(null, true);
  },
});

const router = Router();

router.post("/", authMiddleware, requireAdmin, upload.array("images", 10), uploadImage);

export default router;
