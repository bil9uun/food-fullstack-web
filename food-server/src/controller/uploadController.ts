import { Response, Request } from "express";
import cloudinary from "../utils/cloudinary";
export const uploadFile = async (req: Request, res: Response) => {
  try {
    console.log("File", req.file);
    const result = await cloudinary.uploader.upload(req.file?.path as string);
    res.send("ok => " + result.secure_url);
  } catch (error) {
    res.send("Zurag yvuulahad aldaa garlaa => " + error);
  }
};
