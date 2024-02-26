"use client";
import React, { useContext } from "react";

import CardDefault from "@/components/card";
import CardSale from "@/components/card/cardSale";
import { Container, Grid, Stack, Typography } from "@mui/material";
import IntroductionHomePage from "./introductionHomePage";
import ControlSection from "./controlSection";
import CategoryCard from "./categoryCard";
import { FoodContext } from "@/context/foodContext";
import { CategoryContext } from "@/context/categoryContext";

const HomePage = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <div>
      <IntroductionHomePage />
      <Container>
        <ControlSection />
        {categories.map((category: any) => {
          return <CategoryCard key={category._id} category={category} />;
        })}
      </Container>
    </div>
  );
};

export default HomePage;
