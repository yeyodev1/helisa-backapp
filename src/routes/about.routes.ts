import { Router } from "express";
import { getAbout, updateAbout } from "../controllers/about.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", getAbout);
router.put("/", authMiddleware, updateAbout);

export default router;
