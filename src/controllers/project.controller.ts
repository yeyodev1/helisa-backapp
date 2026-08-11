import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { Project } from "../models/Project";

export async function getProjects(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { all, category, search } = req.query;
    const filter: Record<string, any> = {};

    // By default, public API returns only active projects unless all=true is specified
    if (all !== "true") {
      filter.active = true;
    }

    if (category) {
      filter.category = category;
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search as string, $options: "i" } },
        { description: { $regex: search as string, $options: "i" } },
        { location: { $regex: search as string, $options: "i" } },
      ];
    }

    const projects = await Project.find(filter).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    next(error);
  }
}

export async function getProjectBySlug(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { slug } = req.params;
    const project = await Project.findOne({ slug });
    if (!project) {
      res.status(404).json({ message: "Proyecto no encontrado" });
      return;
    }
    res.json(project);
  } catch (error) {
    next(error);
  }
}

export async function createProject(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const {
      slug,
      title,
      category,
      location,
      description,
      image,
      gallery,
      highlights,
      relatedProducts,
      active,
    } = req.body;

    if (!slug || !title || !category || !image) {
      res.status(400).json({ message: "slug, title, category e image son campos obligatorios" });
      return;
    }

    const existing = await Project.findOne({ slug });
    if (existing) {
      res.status(400).json({ message: "Ya existe un proyecto con ese slug" });
      return;
    }

    const project = await Project.create({
      slug,
      title,
      category,
      location: location || "",
      description: description || "",
      image,
      gallery: gallery || [image],
      highlights: highlights || [],
      relatedProducts: relatedProducts || [],
      active: active !== undefined ? active : true,
    });

    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
}

export async function updateProject(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    let updated;

    if (typeof id === "string" && mongoose.Types.ObjectId.isValid(id)) {
      updated = await Project.findByIdAndUpdate(id, req.body, { new: true });
    } else {
      updated = await Project.findOneAndUpdate({ slug: id }, req.body, { new: true });
    }

    if (!updated) {
      res.status(404).json({ message: "Proyecto no encontrado" });
      return;
    }
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

export async function toggleProjectStatus(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const { active } = req.body;

    const project = await Project.findById(id);
    if (!project) {
      res.status(404).json({ message: "Proyecto no encontrado" });
      return;
    }

    project.active = active !== undefined ? active : !project.active;
    await project.save();

    res.json({
      message: `Proyecto ${project.active ? "activado" : "desactivado"} con éxito`,
      project,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteProject(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: "Proyecto no encontrado" });
      return;
    }
    res.json({ message: "Proyecto eliminado correctamente" });
  } catch (error) {
    next(error);
  }
}
