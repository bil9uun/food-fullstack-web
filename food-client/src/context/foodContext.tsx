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
  filteredFoods: any;
  setFilteredFoods: any;
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

  const [filteredFoods, setFilteredFoods] = useState([]);

  return (
    <FoodContext.Provider
      value={{
        foods,
        filteredFoods,
        setFilteredFoods,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
