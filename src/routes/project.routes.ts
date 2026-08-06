import { Router } from "express";
import {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  toggleProjectStatus,
  deleteProject,
} from "../controllers/project.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", getProjects);
router.get("/:slug", getProjectBySlug);

router.post("/", authMiddleware, createProject);
router.put("/:id", authMiddleware, updateProject);
router.patch("/:id/status", authMiddleware, toggleProjectStatus);
router.delete("/:id", authMiddleware, deleteProject);

export default router;
