import { Router } from "express";
import {
  sendVerifyEmailToUser,
  verifyOtp,
} from "../controller/verifyController";
const router = Router();

router.route("/send-email").post(sendVerifyEmailToUser);
router.route("/otp").post(verifyOtp);

export default router;
