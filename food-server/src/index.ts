import express, { Application } from "express";
import color from "colors";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import verifyRoutes from "./routes/verifyRoutes";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();
app.use(express.json());
app.use(cors());

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

app.listen(8080, () => console.log(color.rainbow("Server is running")));
