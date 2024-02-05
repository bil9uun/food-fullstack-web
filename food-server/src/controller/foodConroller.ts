import { NextFunction, Request, Response } from "express";
import Food from "../model/food";
import MyError from "../utils/myError";

export const createFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newFood = req.body;
    await Food.create(newFood);

    res.status(201).json({ message: "Hool amjilttai uuslee" });
  } catch (error) {
    next(error);
  }
};

export const getFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findById(foodId);

    if (!food) {
      throw new MyError(`${foodId}-тэй food олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${foodId}-тэй food олдлоо`,
      food,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const foods = await Food.find().populate("category", "_id name");

    res.status(200).json({
      message: `Бүх food олдлоо`,
      foods,
    });
  } catch (error) {
    next(error);
  }
};

export const updateFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const updateFood = req.body;

    const category = await Food.findByIdAndUpdate(foodId, updateFood);

    if (!category) {
      throw new MyError(`${foodId}-тэй food олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${foodId}-тэй food шинэчлэгдлээ.`,
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findByIdAndDelete(foodId);

    if (!food) {
      throw new MyError(`${foodId}-тэй food олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${foodId}-тэй food устгалаа.`,
      food,
    });
  } catch (error) {
    next(error);
  }
};
