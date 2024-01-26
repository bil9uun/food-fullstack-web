import { Response, Request } from "express";
import User from "../model/user";

const signIn = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    const user = await User.create(newUser);
  } catch (error) {
    res.status(500).json({ message: "amjiltgui bollo" + error });
  }
};

const logIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  } catch (error) {
    res.status(500).json({ message: "amjiltgui bollo" + error });
  }
};
export { signIn, logIn };
