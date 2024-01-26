import { Response, Request } from "express";
import { sendEmail } from "../utils/sendEmail";

const sendVerifyEmailToUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    await sendEmail(email, "Verify Account For Food-Delivery platform");
  } catch (error) {
    res.status(500).json({ message: "Email ilgeehed aldaa garlaa" + error });
  }
};

export { sendVerifyEmailToUser };
