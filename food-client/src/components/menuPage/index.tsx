"use client";
import React, { useContext, useState } from "react";
import CardDefault from "../card";
import MenuButton from "./menuButton";
import { Stack } from "@mui/material";
import { CategoryContext } from "@/context/categoryContext";
import axios from "axios";
import { FoodContext } from "@/context/foodContext";

const MenuPage = () => {
  const { categories } = useContext(CategoryContext);
  console.log("cats in client", categories);
  const { filteredFoods, foods } = useContext(FoodContext);
  return (
    <div>
      <Stack
        sx={{
          width: "100%",
          height: "60px",
          overflowX: "scroll",
        }}
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        {categories.map((category: any) => (
          <MenuButton category={category} />
        ))}
      </Stack>

      <Stack display="flex" flexDirection="row">
        {filteredFoods.map((filteredFood: any) => {
          return <CardDefault filteredFood={filteredFood} />;
        })}
      </Stack>
      {/* <Stack display="flex" flexDirection="row">
        {foods.map((filteredFood: any) => {
          return <CardDefault filteredFood={filteredFood} />;
        })}
      </Stack> */}
    </div>
  );
};

export default MenuPage;
