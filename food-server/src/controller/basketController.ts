import { NextFunction, Request, Response } from "express";

import Basket from "../model/basket";
import { IReq } from "../utils/interface";

// export const createBasket = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const newBasket = req.body;
//     console.log("newBasket", newBasket);
//     await Basket.create(newBasket);
//     res.status(201).json({ message: "basket uusgelee" });
//   } catch (error) {
//     next(error);
//   }
// };

// export const updateBasket = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { userId, foodId, count } = req.body;
//     const basket = await Basket.findOne({ user: userId });
//     console.log("basket", userId);
//     basket?.foods.push({ food: foodId, count: count });
//     await basket?.save();
//     res.status(200).json({ message: "successfully updated basket" });
//   } catch (error) {
//     next(error);
//   }
// };
export const addToBasketByUserId = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  console.log("User", req.user);
  console.log("Body", req.body);
  try {
    const findBasket = await Basket.findOne({ user: req.user._id });

    if (!findBasket) {
      const basket = await (
        await Basket.create({
          user: req.user._id,
          foods: [
            {
              food: req.body.foodId,
              count: req.body.count,
            },
          ],
          totalPrice: req.body.totalPrice,
        })
      ).populate("foods.food");
      res.status(200).json({ message: "Хоол амжилттай нэмлээ-1", basket });
    } else {
      console.log("BFOODS", findBasket);
      const findIndex = findBasket.foods.findIndex(
        (el: any) => el.food.toString() === req.body.foodId
      );
      console.log("Find", findIndex);

      if (findIndex !== -1) {
        findBasket.foods[findIndex].count = Number(req.body.count);
        findBasket.totalPrice = Number(req.body.totalPrice);
      } else {
        findBasket.foods.push({ food: req.body.foodId, count: req.body.count });
        findBasket.totalPrice = Number(req.body.totalPrice);
      }

      const savedBasket = await (
        await findBasket.save()
      ).populate("foods.food");

      // const savedBasket = await (
      //   await findBasket.save()
      // ).populate("foods.food");

      console.log("ChangedFoods", savedBasket);

      res.status(200).json({
        message: "Хоол амжилттай нэмлээ-2",
        basket: { foods: savedBasket.foods, totalPrice: findBasket.totalPrice },
      });
    }
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
export const deleteBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    console.log("foodId in back ====>", foodId);
    console.log("UserId in back ====>", req.user._id);
    const basket = await Basket.findOne({ user: req.user._id });
    console.log("hi basket", basket);
    // const filteredFood = basket?.foods.filter((el) => el.food !== foodId);
    const findIndex = basket?.foods.findIndex((el) =>
      el.food?._id.equals(foodId)
    );
    console.log("FONDINDEX", findIndex);

    if (findIndex !== undefined) basket?.foods.splice(findIndex, 1);

    await basket?.save();
    // console.log("LAST basket", basket);
    res
      .status(200)
      .json({ message: `Deleted this ${foodId}-id food on basket` });
  } catch (error) {
    console.log("ERROR deleteBasket FUnction in basketcontroller");
    next(error);
  }
};
