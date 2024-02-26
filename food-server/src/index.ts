import express, { Application } from "express";
import color from "colors";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import verifyRoutes from "./routes/verifyRoutes";
import userRoutes from "./routes/userRoutes";
import foodRoutes from "./routes/foodRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import uploadRoutes from "./routes/uploadRoutes";
import basketRoutes from "./routes/basketRoutes";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();

connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/verify", verifyRoutes);
app.use("/categories", categoryRoutes);
app.use("/foods", foodRoutes);
app.use("/upload", uploadRoutes);
app.use("/basket", basketRoutes);

app.listen(8080, () => console.log(color.rainbow("Server is running")));

// app.get("/user", async (req: Request, res: Response) => {
//   const newUser = {
//     name: "Admin",
//     email: "admin@gmail.com",
//     password: "admin123",
//   };
//   res.json({ message: "Shine hereglegch uuslee" });
// });
