import { Router } from "express";
import {
  getCategories,
  getCategoryBySlug,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller";
import { authMiddleware, requireAdmin } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", getCategories);
router.get("/:slug", getCategoryBySlug);

router.post("/", authMiddleware, requireAdmin, createCategory);
router.put("/:id", authMiddleware, requireAdmin, updateCategory);
router.delete("/:id", authMiddleware, requireAdmin, deleteCategory);

export default router;
