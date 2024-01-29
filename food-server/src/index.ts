import express, { Application } from "express";
import color from "colors";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import verifyRoutes from "./routes/verifyRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();
app.use(cors());
app.use(express.json());

connectDB(MONGO_URI);

// app.get("/user", async (req: Request, res: Response) => {
//   const newUser = {
//     name: "Admin",
//     email: "admin@gmail.com",
//     password: "admin123",
//   };
//   res.json({ message: "Shine hereglegch uuslee" });
// });

app.use("/auth", authRoutes);
app.use("/verify", verifyRoutes);
app.use("/users", userRoutes);

app.listen(8080, () => console.log(color.rainbow("Server is running")));
