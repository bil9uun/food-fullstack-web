"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { PropsWithChildren, createContext, useState } from "react";
import { toast } from "react-toastify";

interface IUserContext {
  user: IUser;
  logIn: (name: string, password: string) => void;
  signIn: (
    name: string,
    password: string,
    email: string,
    address: string
  ) => void;
  userInLocalStorage: any;
  tokenInLocalStorage: string | null;
}
interface IUser {
  name: string;
  email: string;
  address: string;
  password: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const userInLocalStorage = JSON.parse(localStorage.getItem("user") as string);
  const tokenInLocalStorage = JSON.parse(
    localStorage.getItem("token") as string
  );

  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    password: "",
  });
  const logIn = async (email: string, password: string) => {
    try {
      const {
        data: { token, user },
      } = await axios.post("http://localhost:8080/auth/logIn", {
        userEmail: email,
        userPassword: password,
      });
      console.log("userEMail", email);
      console.log("userPassword", password);

      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
      console.log("logIn hiigle", "TOKEN", token, "USER", user);

      router.replace("/");
    } catch (error) {
      toast.error("Nevtrehed aldaa garlaa");
      console.log("Login Err", error);
    }
  };
  const signIn = async (
    email: string,
    password: string,
    name: string,
    address: string
  ) => {
    try {
      await axios.post("http://localhost:8080/auth/signIn", {
        email,
        password,
        address,
        name,
      });
    } catch (error) {
      console.log("SignIn function in userProvider");
    }
  };
  return (
    <UserContext.Provider
      value={{ user, logIn, signIn, userInLocalStorage, tokenInLocalStorage }}
    >
      {children}
    </UserContext.Provider>
  );
};
