import { OrderContext } from "@/context/orderContext";
import React, { useContext } from "react";

const OrderCard = ({ user }: any) => {
  console.log("usercard user", user);
  const { orders } = useContext(OrderContext);
  console.log("orders", orders);
  return <div>{user?.orders.map((order: any) => order.foods)}</div>;
};

export default OrderCard;
