"use client";
import { PropsWithChildren, createContext, useState } from "react";

interface IUserContext {
  user: IUser;
  logIn: (name: string, password: string) => void;
}
interface IUser {
  name: string;
  email: string;
  address: string;
  password: string;
}

export const UserContext = createContext<IUserContext>({
  user: { name: "", email: "", address: "", password: "" },
  logIn: function (email, password): void {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  return (
    <UserContext.Provider value={{ user, logIn: () => {} }}>
      {children}
    </UserContext.Provider>
  );
};
