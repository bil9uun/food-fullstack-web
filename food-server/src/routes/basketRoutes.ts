import { Router } from "express";
import {
  // createBasket,
  deleteBasket,
  getBasket,
  addToBasketByUserId,
  // updateBasket,
} from "../controller/basketController";
import { authenticate } from "../middleware/auth";

const router = Router();

router
  .route("/")
  .post(authenticate, addToBasketByUserId)
  .get(authenticate, getBasket);

router.route("/:foodId").delete(authenticate, deleteBasket);

export default router;
