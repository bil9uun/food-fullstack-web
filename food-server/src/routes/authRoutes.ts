import { Router } from "express";
import { signIn, logIn } from "../controller/authController";

const router = Router();

router.route("/signIn").post(signIn);
router.route("/logIn").post(logIn);

export default router;
