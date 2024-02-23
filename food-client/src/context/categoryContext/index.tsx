"use client";
import axios from "axios";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
interface ICategory {
  name: string;
  description: string;
  image: string;
  createdAt: string;
}

interface ICategoryContext {
  categories: ICategory[];
}

export const CategoryContext = createContext<ICategoryContext>(
  {} as ICategoryContext
);

const CategoryProvider = ({ children }: PropsWithChildren) => {
  // For Get
  const [categories, setCategories] = useState<ICategory[]>([]);
  const getCategories = async () => {
    const {
      data: { categories },
    } = await axios.get("http://localhost:8080/categories");
    setCategories(categories);
    console.log("categories in context", categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

 

  return (
    <CategoryContext.Provider
      value={{
        categories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
