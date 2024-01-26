import { Router } from "express";
const { signIn, logIn } = require("../controller/authController");

const router = Router();

router.route("/signIn").post(signIn);
router.route("/logIn").post(logIn);

export default router;
