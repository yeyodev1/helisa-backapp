import { Schema, model, Document } from "mongoose";

export interface IProductSpec {
  label: string;
  value: string;
}

export interface IProduct extends Document {
  slug: string;
  categorySlug: string;
  line: "industrial" | "domestica" | "accesorios";
  name: string;
  image: string;
  gallery?: string[];
  description?: string;
  availability?: string;
  features?: string[];
  specs?: IProductSpec[];
  createdAt: Date;
  updatedAt: Date;
}

const specSchema = new Schema<IProductSpec>(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new Schema<IProduct>(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    categorySlug: { type: String, required: true, trim: true },
    line: { type: String, enum: ["industrial", "domestica", "accesorios"], required: true },
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    gallery: [{ type: String }],
    description: { type: String, default: "" },
    availability: { type: String, default: "Disponible bajo pedido" },
    features: [{ type: String }],
    specs: [specSchema],
  },
  {
    timestamps: true,
  }
);

export const Product = model<IProduct>("Product", productSchema);
