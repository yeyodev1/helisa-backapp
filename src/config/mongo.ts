import mongoose from "mongoose";

export async function dbConnect() {
  const DB_URI =
    process.env.DB_URI ||
    "mongodb+srv://dreyes_db_user:p1ZWZpuoY8Tc5O6M@helisa.umm9khh.mongodb.net/helisa?retryWrites=true&w=majority&appName=helisa";

  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    await mongoose.connect(DB_URI);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
