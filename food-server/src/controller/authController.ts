import { Response, Request } from "express";
import bcrypt from "bcrypt";
import User from "../model/user";
import jwt from "jsonwebtoken";
const signIn = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    const user = await User.create({ ...newUser });
    res.status(201).json({ message: "Шинэ хэрэглэгч амжилттай бүртгэгдлээ" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Shine hereglegch burtgehed aldaa garlaa", error });
  }
};

const logIn = async (req: Request, res: Response) => {
  try {
    const { userEmail, userPassword } = req.body;
    console.log("LOGIN", userEmail);
    const user = await User.findOne({ email: userEmail })
      .select("+password")
      .lean();
    console.log("User", user);
    if (!user) {
      return res
        .status(400)
        .json({ message: `${userEmail}-тэй хэрэглэгч бүртгэлгүй байна.` });
    }

    const isValid = await bcrypt.compare(userPassword, user.password);

    if (!isValid) {
      return res
        .status(400)
        .json({ message: `Имэйл эсвэл нууц үг буруу байна.` });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    const { password, ...otherParams } = user;
    res.status(201).send({
      message: "Хэрэглэгч амжилттай нэвтэрлээ",
      token,
      user: otherParams,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Шинэ хэрэглэгч бүртгэх үед алдаа гарлаа.", error });
  }
};

export { signIn, logIn };
