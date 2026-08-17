import { Router } from "express";
import {
  getProducts,
  getProductBySlug,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";
import { authMiddleware, requireAdmin } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", getProducts);
router.get("/:categorySlug/:productSlug", getProductBySlug);
router.get("/:categorySlug", getProductBySlug);

router.post("/", authMiddleware, requireAdmin, createProduct);
router.put("/:id", authMiddleware, requireAdmin, updateProduct);
router.delete("/:id", authMiddleware, requireAdmin, deleteProduct);

export default router;
