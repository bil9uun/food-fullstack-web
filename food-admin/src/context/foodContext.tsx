"use client";
import axios from "axios";
import React, {
  ChangeEvent,
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
  handleChangeModalInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  uploadImage: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeSwitch: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
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

  //For Food Modal

  const [foodForm, setFoodForm] = useState({
    name: "",
    price: 0,
    isSale: false,
    discountPrice: 0,
    description: "",
    image: "",
    category: "",
  });

  const handleChangeModalInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFoodForm({ ...foodForm, [e.target.name]: e.target.value });
  };
  const [checked, setChecked] = useState(false);
  const handleChangeSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    setFoodForm({ ...foodForm, [e.target.name]: e.target.checked });
  };

  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
  };

  const createFood = async () => {
    try {
      await axios.post("http://localhost:8080/foods", {
        name: foodForm.name,
        price: foodForm.price,
        discountPrice: foodForm.discountPrice,
        isSale: foodForm.isSale,
        description: foodForm.description,
        image: foodForm.image,
        category: foodForm.category,
      });
      // setCategories([...categories, data.newCategory]);
    } catch (error) {
      console.log("ERROR IN CreateFood FUNCTION", error);
    }
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      const { data } = await axios.post(
        "http://localhost:8080/upload",
        formData
      );
      console.log("data food photo", data);
      foodForm.image = data.image_url;
      console.log("Zuragaa hadgalchlaa");
      createFood();
    } catch (error) {
      console.log("ERROR IN UPLOAD IMAGE FUNCTION", error);
    }
  };
  return (
    <FoodContext.Provider
      value={{
        foods,
        handleChangeModalInput,
        uploadImage,
        handleFileChange,
        handleChangeSwitch,
        checked,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
