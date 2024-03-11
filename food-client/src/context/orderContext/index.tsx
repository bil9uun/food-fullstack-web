"use client";
import axios from "axios";
import React, { PropsWithChildren, createContext, useContext } from "react";

import { toast } from "react-toastify";
import { BasketContext } from "../basketContext";
import { UserContext } from "../userProvider";

interface IOrderContext {
  createOrder: (
    duureg: string,
    khoroo: string,
    buildingNo: string,
    info: string,
    paymentAmount: number,
    method: string,
    phone: string
  ) => Promise<void>;
}

export const OrderContext = createContext<IOrderContext>({} as IOrderContext);

export const OrderProvider = ({ children }: PropsWithChildren) => {
  const { basketFoods } = useContext(BasketContext);
  console.log("bf in op", basketFoods);
  const { tokenInLocalStorage } = useContext(UserContext);
  const createOrder = async (
    duureg: string,
    khoroo: string,
    buildingNo: string,
    info: string,
    paymentAmount: number,
    method: string,
    phone: string
  ) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/order",
        {
          duureg,
          khoroo,
          buildingNo,
          info,
          paymentAmount,
          method,
          phone,
        },
        { headers: { Authorization: `Bearer ${tokenInLocalStorage}` } }
      );
      toast.success("order uuslee");
    } catch (error) {
      toast.error(`${error} - iim aldaa garlaa`);
    }
  };

  return (
    <OrderContext.Provider value={{ createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
