import { NextFunction, Request, Response } from "express";

import Basket from "../model/basket";
import { IReq } from "../utils/interface";

export const createBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newBasket = req.body;
    console.log("newBasket", newBasket);
    await Basket.create(newBasket);
    res.status(201).json({ message: "basket uusgelee" });
  } catch (error) {
    next(error);
  }
};

export const getBasket = async (req: IReq, res: Response) => {
  try {
    const basket = await Basket.findOne({ user: req.user._id }).populate(
      "foods.food"
    );
    res.status(201).json({ message: "basket олдлоо", basket });
  } catch (error) {
    res.status(400).json({
      message: "basket-n мэдээллийг авах үед алдаа гарлаа.",
      error,
    });
  }
};
export const updateBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, foodId, count } = req.body;
    const basket = await Basket.findOne({ user: userId });
    console.log("basket", userId);
    basket?.foods.push({ food: foodId, count: count });
    await basket?.save();
    res.status(200).json({ message: "successfully updated basket" });
  } catch (error) {
    next(error);
  }
};
