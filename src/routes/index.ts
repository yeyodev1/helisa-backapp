import express, { Application } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import categoryRoutes from "./category.routes";
import productRoutes from "./product.routes";
import projectRoutes from "./project.routes";
import uploadRoutes from "./upload.routes";
import aboutRoutes from "./about.routes";

function routerApi(app: Application) {
  const router = express.Router();
  app.use("/api", router);

  router.use("/auth", authRoutes);
  router.use("/users", userRoutes);
  router.use("/categories", categoryRoutes);
  router.use("/products", productRoutes);
  router.use("/projects", projectRoutes);
  router.use("/upload", uploadRoutes);
  router.use("/about", aboutRoutes);
}

export default routerApi;
