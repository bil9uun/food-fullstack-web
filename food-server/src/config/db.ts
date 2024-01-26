import mongoose from "mongoose";
import color from "colors";

export const connectDB = async (MONGO_URI: string) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(color.bgGreen("Database is connected"));
  } catch (error) {
    console.log(color.bgRed(`Database is failed cause ${error}to connect.`));
  }
};
