import { Router } from "express";
import { getAbout, updateAbout } from "../controllers/about.controller";
import { authMiddleware, requireAdmin } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", getAbout);
router.put("/", authMiddleware, requireAdmin, updateAbout);

export default router;
