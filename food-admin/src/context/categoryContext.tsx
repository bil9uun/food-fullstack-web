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
  handleChangeModalInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  uploadImage: (e: ChangeEvent<HTMLInputElement>) => void;
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
  };

  useEffect(() => {
    getCategories();
  }, []);

  // For Modal
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    description: "",
    image: "",
  });
  const handleChangeModalInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryForm({ ...categoryForm, [e.target.name]: e.target.value });
  };
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
  };
  // const createCategory = async () => {
  //   try {
  //     const formData = new FormData();
  //     // formData.set("name", categoryForm.name);
  //     // formData.set("description", categoryForm.description);
  //     // formData.set("image", file!);
  //     const { data } = await axios.post(
  //       "http://localhost:8080/categories",
  //       formData
  //     );
  //     console.log("data", data);
  //     setCategories([...categories, data.categories]);
  //   } catch (error) {
  //     console.log("ERROR IN CREATECATEGORY FUNCTION");
  //   }
  // };
  const createCategory = async () => {
    try {
      const data = await axios
        .post("http://localhost:8080/categories", {
          name: categoryForm.name,
          description: categoryForm.description,
          image: categoryForm.image,
        })
        .then((res) => res.data);
      setCategories([...categories, data.newCategory]);
    } catch (error) {
      console.log("ERROR IN CREATECATEGORY FUNCTION");
    }
  };
  // const uploadImage = async () => {
  //   try {
  //     const formData = new FormData();

  //     formData.set("image", file!);
  //     const image = await axios.post("http://localhost:8080/upload", formData);
  //     categoryForm.image = image.data.url;
  //     createCategory();
  //   } catch (error) {
  //     console.log("ERROR IN UPLOAD IMAGE FUNCTION", error);
  //   }
  // };
  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      const { data } = await axios.post(
        "http://localhost:8080/upload",
        formData
      );
      console.log("data cat photo", data);
      categoryForm.image = data;
      createCategory();
    } catch (error) {
      console.log("ERROR IN UPLOAD IMAGE FUNCTION", error);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        handleChangeModalInput,
        handleFileChange,
        uploadImage,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
