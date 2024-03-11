import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserContext } from "../userProvider";
import { toast } from "react-toastify";
import { setRef } from "@mui/material";

type IBasketContext = {
  basketFoods: any;
  updateFoodToBasket: (food: object) => void;
  deleteBasket: (delFoodId: string) => void;
  addBasket: (food: any) => void;
};

export const BasketContext = createContext<IBasketContext>(
  {} as IBasketContext
);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { userInLocalStorage, tokenInLocalStorage } = useContext(UserContext);
  const [basketFoods, setBasketFoods] = useState([]);
  const [refetch, setRefetch] = useState(false);

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
  }, [refetch]);

  const addBasket = async (food: any) => {
    try {
      if (userInLocalStorage) {
        const {
          data: { basket },
        } = await axios.post("http://localhost:8080/basket", food, {
          headers: { Authorization: `Bearer ${tokenInLocalStorage}` },
        });
        setRefetch(!refetch);
        toast.success("Хоол амжилттаи сагслагдлаа");
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  const updateFoodToBasket = async (food: any) => {
    console.log("food in basketcontext", food);
    try {
      const { data } = (await axios.post("http://localhost:8080/basket", food, {
        headers: { Authorization: `Bearer ${tokenInLocalStorage}` },
      })) as {
        data: any;
      };
      console.log("basketfoods in updatefoodtbas", data.basket);
      setBasketFoods(data.basket.foods);
      setRefetch(!refetch);
      toast.success(data.message);
    } catch (error) {}
  };

  const deleteBasket = async (delFoodId: any) => {
    // console.log("delFoodId in basketCOntroller ====>", delFoodId);
    // console.log("Userid in basketController====>", userInLocalStorage._id);
    // console.log("userinlocal in basketCOntroler", userInLocalStorage);
    // console.log("tokeninLocal in basketCOntroler", tokenInLocalStorage);
    try {
      if (userInLocalStorage) {
        await axios.delete("http://localhost:8080/basket/" + delFoodId, {
          headers: {
            Authorization: `Bearer ${tokenInLocalStorage}`,
          },
        });
        setRefetch(!refetch);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  return (
    <BasketContext.Provider
      value={{
        basketFoods,
        updateFoodToBasket,
        deleteBasket,
        addBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
