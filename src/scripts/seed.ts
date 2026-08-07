import "../config/dns-patch";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { User } from "../models/User";
import { Category } from "../models/Category";
import { Product } from "../models/Product";
import { productCategories } from "../../../helisa-frontapp/src/data/products";

dotenv.config();

async function seed() {
  const DB_URI = process.env.DB_URI;
  if (!DB_URI) {
    console.error("DB_URI no está definido en .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(DB_URI);
    console.log("Conectado a MongoDB Atlas para Seed Completo...");

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
      console.log(`✅ Usuario creado: ${adminEmail} / 123456789`);
    } else {
      console.log(`ℹ️ Usuario ${adminEmail} ya existía.`);
    }

    // 2. Seed All Categories and All Products from productCategories
    let totalCatCount = 0;
    let totalProdCount = 0;

    for (const catData of productCategories) {
      const { products: catProducts, ...catFields } = catData;

      let category = await Category.findOne({ slug: catFields.slug });
      if (!category) {
        category = await Category.create({
          slug: catFields.slug,
          line: catFields.line,
          name: catFields.name,
          sourceUrl: catFields.sourceUrl || "",
          description: catFields.description || "",
          benefits: catFields.benefits || [],
        });
        totalCatCount++;
        console.log(`✅ Categoría creada: [${catFields.line}] ${category.name}`);
      } else {
        // Update fields if missing
        category.line = catFields.line;
        category.name = catFields.name;
        if (catFields.description) category.description = catFields.description;
        if (catFields.benefits) category.benefits = catFields.benefits;
        await category.save();
      }

      for (const prodData of catProducts) {
        let product = await Product.findOne({ slug: prodData.slug });
        if (!product) {
          product = await Product.create({
            slug: prodData.slug,
            categorySlug: catFields.slug,
            line: catFields.line,
            name: prodData.name,
            image: prodData.image,
            gallery: prodData.gallery || [prodData.image],
            description: prodData.description || "",
            availability: prodData.availability || "Disponible bajo pedido",
            features: prodData.features || [],
            specs: prodData.specs || [],
          });
          totalProdCount++;
          console.log(`  └─ ✅ Producto creado: ${prodData.name}`);
        } else {
          // Update categorySlug and line to ensure proper linking
          product.categorySlug = catFields.slug;
          product.line = catFields.line;
          await product.save();
        }
      }
    }

    console.log(`\n✨ ¡Proceso de Seed finalizado! Se aseguraron ${productCategories.length} categorías y todos sus productos.`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error durante el seed:", error);
    process.exit(1);
  }
}

seed();
