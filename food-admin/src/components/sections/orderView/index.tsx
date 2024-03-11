"use client";
import { OrderContext } from "@/context/orderContext";
import React, { useContext } from "react";
import OrderCard from "./order-card";

const OrderView = () => {
  const { users } = useContext(OrderContext);
  console.log("users in page", users);
  return (
    <div>
      {users?.map((user: any) => {
        return <OrderCard user={user} />;
      })}
      <OrderCard />
    </div>
  );
};

export default OrderView;
