"use client";
import { FoodContext } from "@/context/foodContext";
import { Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { PropsWithChildren, useContext, useState } from "react";

const MenuButton = ({ category }: any) => {
  //   const [filteredFoods, setFilteredFoods] = useState([]);
  const { filteredFoods, setFilteredFoods } = useContext(FoodContext);

  const getFilterFoods = async () => {
    const {
      data: { foods },
    } = await axios.get("http://localhost:8080/foods");
    setFilteredFoods(
      foods.filter((food: any) => {
        return food.category.name === category.name;
      })
    );
    console.log("hi", filteredFoods);
  };

  //   const getFoods = async () => {
  //     const {
  //       data: { foods },
  //     } = await axios.get("http://localhost:8080/foods");
  //     setFoods(foods);
  //   };
  return (
    <Stack
      sx={{
        width: "282px",
        height: "35px",
        background: "green",
        borderRadius: "16px",
        marginRight: "10px",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={() => {
        getFilterFoods();
      }}
    >
      <Typography sx={{ fontWeight: "600", color: "white" }}>
        {category.name}
      </Typography>
    </Stack>
  );
};

export default MenuButton;
