"use client";
import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

interface IFood {
  name: string;
  price: number;
  discountPrice: number;
  isSale: string;
  false: boolean;
  description: string;
  image: string;
  category: string;
  createdAt: string;
}
interface IFoodContext {
  foods: IFood[];
}
export const FoodContext = createContext<IFoodContext>({} as IFoodContext);

const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState<IFood[]>([]);
  const getFoods = async () => {
    const {
      data: { foods },
    } = await axios.get("http://localhost:8080/foods");
    setFoods(foods);
  };
  useEffect(() => {
    getFoods();
  }, []);
  return (
    <FoodContext.Provider
      value={{
        foods,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
