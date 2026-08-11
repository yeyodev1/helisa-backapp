import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { Product } from "../models/Product";

export async function getProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { line, categorySlug, search } = req.query;
    const filter: Record<string, any> = {};

    if (line) filter.line = line;
    if (categorySlug) filter.categorySlug = categorySlug;
    if (search) {
      filter.$or = [
        { name: { $regex: search as string, $options: "i" } },
        { description: { $regex: search as string, $options: "i" } },
      ];
    }

    const products = await Product.find(filter).sort({ name: 1 });
    res.json(products);
  } catch (error) {
    next(error);
  }
}

export async function getProductBySlug(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { categorySlug, productSlug } = req.params;
    const filter = productSlug
      ? { categorySlug, slug: productSlug }
      : { slug: categorySlug };

    const product = await Product.findOne(filter);
    if (!product) {
      res.status(404).json({ message: "Producto no encontrado" });
      return;
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
}

export async function createProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const {
      slug,
      categorySlug,
      line,
      name,
      image,
      gallery,
      description,
      availability,
      features,
      specs,
    } = req.body;

    if (!slug || !categorySlug || !line || !name || !image) {
      res.status(400).json({ message: "slug, categorySlug, line, name e image son obligatorios" });
      return;
    }

    const existing = await Product.findOne({ slug });
    if (existing) {
      res.status(400).json({ message: "Ya existe un producto con ese slug" });
      return;
    }

    const product = await Product.create({
      slug,
      categorySlug,
      line,
      name,
      image,
      gallery: gallery || [],
      description: description || "",
      availability: availability || "Disponible bajo pedido",
      features: features || [],
      specs: specs || [],
    });

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
}

export async function updateProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    let updated;

    if (typeof id === "string" && mongoose.Types.ObjectId.isValid(id)) {
      updated = await Product.findByIdAndUpdate(id, req.body, { new: true });
    } else {
      updated = await Product.findOneAndUpdate({ slug: id }, req.body, { new: true });
    }

    if (!updated) {
      res.status(404).json({ message: "Producto no encontrado" });
      return;
    }
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

export async function deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    let deleted;

    if (typeof id === "string" && mongoose.Types.ObjectId.isValid(id)) {
      deleted = await Product.findByIdAndDelete(id);
    } else {
      deleted = await Product.findOneAndDelete({ slug: id });
    }

    if (!deleted) {
      res.status(404).json({ message: "Producto no encontrado" });
      return;
    }
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    next(error);
  }
}
