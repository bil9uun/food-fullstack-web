import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserContext } from "../userProvider";

type IBasketContext = {
  basketFoods: any;
  addBasket: (food: string, count: number) => void;
};

export const BasketContext = createContext<IBasketContext>(
  {} as IBasketContext
);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { userInLocalStorage, tokenInLocalStorage } = useContext(UserContext);
  const [basketFoods, setBasketFoods] = useState([]);

  const getUserBasket = async () => {
    const {
      data: { basket },
    } = await axios.get("http://localhost:8080/basket", {
      headers: { Authorization: `Bearer ${tokenInLocalStorage}` },
    });
    console.log("basketfood in basketCOntext", basket);
    setBasketFoods(basket.foods);
  };
  useEffect(() => {
    getUserBasket();
  }, [tokenInLocalStorage]);

  const addBasket = async (food: any, count: number) => {
    try {
      if (userInLocalStorage) {
        const {
          data: { basket },
        } = await axios.put("http://localhost:8080/basket", {
          userId: userInLocalStorage._id,
          foodId: food._id,
          count: count,
        });
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };
  return (
    <BasketContext.Provider value={{ basketFoods, addBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
