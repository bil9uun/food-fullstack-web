import { NextFunction, Request, Response } from "express";
import { IReq } from "../utils/interface";
import User from "../model/user";
import Basket from "../model/basket";

export const createOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const findBasket = await Basket.findOne({ user: req.user._id });
  try {
    const newOrder = {
      orderNo: "#" + Math.floor(Math.random() * 1000000),
      foods: findBasket?.foods,
      payment: {
        paymentAmount: req.body.paymentAmount,
        method: req.body.method,
      },
      address: {
        khoroo: req.body.khoroo,
        duureg: req.body.duureg,
        buildingNo: req.body.buildingNo,
        info: req.body.info,
      },
      phone: req.body.phone,
    };
    const findUser = await User.findById(req.user._id);
    console.log("user", findUser);

    if (!findUser) {
      console.log("Burtgelgui hereglegch baina");
    }
    findUser!.orders.push(newOrder);
    await findUser!.save();

    res.status(200).json({ message: "Захиалга амжилттай үүслээ." });
  } catch (error) {
    next(error);
  }
};
