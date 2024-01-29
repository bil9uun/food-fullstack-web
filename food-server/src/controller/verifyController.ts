import { Response, Request } from "express";
import { sendEmail } from "../utils/sendEmail";
import User from "../model/user";
import bcrypt from "bcrypt";

const sendVerifyEmailToUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    console.log("email controller", req.body);
    const otp = Math.round(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res
        .status(400)
        .json({ message: "Email-tei hereglegch oldosngui" });
    }
    const salt = await bcrypt.genSalt(10);

    findUser.otp = await bcrypt.hash(otp, salt);

    await findUser.save();

    await sendEmail(email, otp);
    res.status(201).json({ message: "Email амжилттай илгээгдлээ." });
  } catch (error) {
    res.status(400).json({ message: "Email ilgeehed aldaa garlaa" + error });
  }
};

const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;
    console.log("email", email);
    console.log("OTP", otp);

    const findUser = await User.findOne({ email });
    console.log("USER", findUser);
    if (!findUser) {
      return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
    }

    const validOtp = await bcrypt.compare(otp, findUser?.otp);

    if (!validOtp) {
      return res.status(400).json({ message: "Код буруу байна" });
    }
    console.log("valid", validOtp);
    res.status(200).json({ message: "OTP is validated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server is internal error" });
  }
};

export { sendVerifyEmailToUser, verifyOtp };
