import { Router } from "express";
import { sendVerifyEmailToUser } from "../controller/verifyController";
const router = Router();

router.route("/send-email").post(sendVerifyEmailToUser);

export default router;
