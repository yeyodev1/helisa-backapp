import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { Category } from "../models/Category";

export async function getCategories(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { line } = req.query;
    const filter: Record<string, any> = {};
    if (line) filter.line = line;

    const categories = await Category.find(filter).sort({ name: 1 });
    res.json(categories);
  } catch (error) {
    next(error);
  }
}

export async function getCategoryBySlug(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { slug } = req.params;
    const category = await Category.findOne({ slug });
    if (!category) {
      res.status(404).json({ message: "Categoría no encontrada" });
      return;
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
}

export async function createCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { slug, line, name, sourceUrl, description, benefits } = req.body;

    if (!slug || !line || !name) {
      res.status(400).json({ message: "slug, line y name son campos obligatorios" });
      return;
    }

    const existing = await Category.findOne({ slug });
    if (existing) {
      res.status(400).json({ message: "Ya existe una categoría con ese slug" });
      return;
    }

    const category = await Category.create({
      slug,
      line,
      name,
      sourceUrl: sourceUrl || "",
      description: description || "",
      benefits: benefits || [],
    });

    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
}

export async function updateCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    let updated;

    if (typeof id === "string" && mongoose.Types.ObjectId.isValid(id)) {
      updated = await Category.findByIdAndUpdate(id, req.body, { new: true });
    } else {
      updated = await Category.findOneAndUpdate({ slug: id }, req.body, { new: true });
    }

    if (!updated) {
      res.status(404).json({ message: "Categoría no encontrada" });
      return;
    }
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

export async function deleteCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const deleted = await Category.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: "Categoría no encontrada" });
      return;
    }
    res.json({ message: "Categoría eliminada correctamente" });
  } catch (error) {
    next(error);
  }
}
