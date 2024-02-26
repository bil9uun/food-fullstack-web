import { Router } from "express";
import {
  createBasket,
  getBasket,
  updateBasket,
} from "../controller/basketController";
import { authenticate } from "../middleware/auth";

const router = Router();

router
  .route("/")
  .post(createBasket)
  .get(authenticate, getBasket)
  .put(updateBasket);

export default router;
