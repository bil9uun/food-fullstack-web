"use client";
import axios from "axios";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

interface IOrderContext {
  users: any;
  orders: any;
}

export const OrderContext = createContext<IOrderContext>({} as IOrderContext);

const OrderProvider = ({ children }: PropsWithChildren) => {
  // For Get
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const getUsers = async () => {
    const {
      data: { users },
    } = await axios.get("http://localhost:8080/users");
    setUsers(users);
    setOrders(
      users
        ?.map((user: any) => user.orders)
        .map((order: any) => ({
          ...order,
          user: { name: users.name, phone: order.phone },
        }))
        .flat()
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        users,
        orders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
