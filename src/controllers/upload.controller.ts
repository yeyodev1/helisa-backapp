import { Request, Response, NextFunction } from "express";
import { v2 as cloudinary } from "cloudinary";
import { env } from "../config/env";

cloudinary.config({
  cloud_name: env.cloudinaryCloudName,
  api_key: env.cloudinaryApiKey,
  api_secret: env.cloudinaryApiSecret,
});

export async function uploadImage(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const files = req.files as Express.Multer.File[] | undefined;
    const file = req.file as Express.Multer.File | undefined;

    const itemsToUpload = files && files.length > 0 ? files : file ? [file] : [];

    if (itemsToUpload.length === 0) {
      res.status(400).json({ message: "No se envió ningún archivo de imagen" });
      return;
    }

    const uploadPromises = itemsToUpload.map((f) => {
      return new Promise<string>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "helisa/products" },
          (error, result) => {
            if (error || !result) {
              return reject(error || new Error("Error al subir a Cloudinary"));
            }
            resolve(result.secure_url);
          }
        );
        stream.end(f.buffer);
      });
    });

    const urls = await Promise.all(uploadPromises);

    if (files && files.length > 0) {
      res.json({ urls });
    } else {
      res.json({ url: urls[0] });
    }
  } catch (error) {
    next(error);
  }
}
