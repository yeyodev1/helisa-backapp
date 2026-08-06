import { Schema, model, Document } from "mongoose";

export interface ICategory extends Document {
  slug: string;
  line: "industrial" | "domestica" | "accesorios";
  name: string;
  sourceUrl?: string;
  description?: string;
  benefits?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new Schema<ICategory>(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    line: { type: String, enum: ["industrial", "domestica", "accesorios"], required: true },
    name: { type: String, required: true, trim: true },
    sourceUrl: { type: String, default: "" },
    description: { type: String, default: "" },
    benefits: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const Category = model<ICategory>("Category", categorySchema);
