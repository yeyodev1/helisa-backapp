import "../config/dns-patch";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { User } from "../models/User";
import { Category } from "../models/Category";
import { Product } from "../models/Product";
import { Project } from "../models/Project";

dotenv.config();

import { accessoryCategories } from "../data/accessoryProducts";
import { domesticCategories } from "../data/domesticProducts";
import { industrialCategories } from "../data/industrialProducts";
import { projects as staticProjects } from "../data/projects";

const allCatalogCategories = [
  ...industrialCategories,
  ...domesticCategories,
  ...accessoryCategories,
];

async function seedFull() {
  const DB_URI = process.env.DB_URI;
  if (!DB_URI) {
    console.error("DB_URI no está definido en .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(DB_URI);
    console.log("Conectado a MongoDB Atlas. Ejecutando Seed Optimizado...");

    // 1. Seed Default Admin User
    const adminEmail = "dreyes@bakano.ec";
    const existingUser = await User.findOne({ email: adminEmail });

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash("123456789", 10);
      await User.create({
        name: "Diego Reyes (Admin)",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
      });
      console.log(`✅ Usuario admin verificado/creado: ${adminEmail}`);
    }

    // 2. Prepare Categories and Products for Bulk Upsert
    const fallbackProductImg = "https://res.cloudinary.com/bmtcnrkr/image/upload/v1784237582/helisa/products/ablandadores-automaticos-f2cbc068f9.webp";

    const categoryOps: any[] = [];
    const productOps: any[] = [];

    for (const catData of allCatalogCategories) {
      categoryOps.push({
        updateOne: {
          filter: { slug: catData.slug },
          update: {
            $set: {
              slug: catData.slug,
              line: catData.line,
              name: catData.name,
              sourceUrl: catData.sourceUrl || "",
              description: catData.description || "",
              benefits: catData.benefits || [],
            },
          },
          upsert: true,
        },
      });

      for (const prodData of catData.products) {
        const imgUrl = prodData.image || fallbackProductImg;
        productOps.push({
          updateOne: {
            filter: { slug: prodData.slug },
            update: {
              $set: {
                slug: prodData.slug,
                categorySlug: catData.slug,
                line: catData.line,
                name: prodData.name,
                image: imgUrl,
                gallery: prodData.gallery && prodData.gallery.length > 0 ? prodData.gallery : [imgUrl],
                description: prodData.description || "",
                availability: prodData.availability || "Disponible bajo pedido",
                features: prodData.features || [],
                specs: prodData.specs || [],
              },
            },
            upsert: true,
          },
        });
      }
    }

    if (categoryOps.length > 0) {
      await Category.bulkWrite(categoryOps);
      console.log(`✅ ${categoryOps.length} categorías procesadas.`);
    }

    if (productOps.length > 0) {
      await Product.bulkWrite(productOps);
      console.log(`✅ ${productOps.length} productos procesados.`);
    }

    // 3. Prepare Projects for Bulk Upsert
    const fallbackProjectImg = "https://res.cloudinary.com/bmtcnrkr/image/upload/v1783372899/helisa/projects/imagen-agua.jpg";
    const projectOps: any[] = [];

    for (const projData of staticProjects) {
      const projImg = projData.image || fallbackProjectImg;
      projectOps.push({
        updateOne: {
          filter: { slug: projData.slug },
          update: {
            $set: {
              slug: projData.slug,
              title: projData.title,
              category: projData.category,
              location: projData.location || "",
              description: projData.description || "",
              image: projImg,
              gallery: projData.gallery && projData.gallery.length > 0 ? projData.gallery : [projImg],
              highlights: projData.highlights || [],
              relatedProducts: projData.relatedProducts || [],
              active: true,
            },
          },
          upsert: true,
        },
      });
    }

    if (projectOps.length > 0) {
      await Project.bulkWrite(projectOps);
      console.log(`✅ ${projectOps.length} proyectos procesados en MongoDB Atlas.`);
    }

    console.log("\n🎉 ¡SEED Y MIGRACIÓN A MONGODB ATLAS COMPLETADA CON ÉXITO!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error durante el seed:", error);
    process.exit(1);
  }
}

seedFull();
