import { Schema, model, Document } from "mongoose";

export interface IProjectRelatedProduct {
  label: string;
  to: string;
}

export interface IProject extends Document {
  slug: string;
  title: string;
  category: string;
  location?: string;
  description: string;
  image: string;
  gallery: string[];
  highlights: string[];
  relatedProducts: IProjectRelatedProduct[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const relatedProductSchema = new Schema<IProjectRelatedProduct>(
  {
    label: { type: String, required: true },
    to: { type: String, required: true },
  },
  { _id: false }
);

const projectSchema = new Schema<IProject>(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    location: { type: String, default: "" },
    description: { type: String, default: "" },
    image: { type: String, required: true },
    gallery: [{ type: String }],
    highlights: [{ type: String }],
    relatedProducts: [relatedProductSchema],
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const Project = model<IProject>("Project", projectSchema);
