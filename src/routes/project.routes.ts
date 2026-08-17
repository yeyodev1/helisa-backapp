import { Router } from "express";
import {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  toggleProjectStatus,
  deleteProject,
} from "../controllers/project.controller";
import { authMiddleware, requireAdmin } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", getProjects);
router.get("/:slug", getProjectBySlug);

router.post("/", authMiddleware, requireAdmin, createProject);
router.put("/:id", authMiddleware, requireAdmin, updateProject);
router.patch("/:id/status", authMiddleware, requireAdmin, toggleProjectStatus);
router.delete("/:id", authMiddleware, requireAdmin, deleteProject);

export default router;
