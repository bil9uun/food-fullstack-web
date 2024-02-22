"use client";

import { useContext, useState } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import FoodCard from "./food-card";
import FoodSort from "./food-sort";
// import ProductFilters from "./product-filters";
// import ProductCartWidget from "./product-cart-widget";

// ----------------------------------------------------------------------
import { sample } from "lodash";
import { faker } from "@faker-js/faker";
import { FoodContext } from "@/context/foodContext";

export default function FoodView() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const { foods } = useContext(FoodContext);
  console.log("foods data = ", foods);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Хоолны жагсаалт
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {/* <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          /> */}

          <FoodSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {foods.map((food: any) => (
          <Grid key={food.id} xs={12} sm={6} md={3}>
            <FoodCard food={food} />
          </Grid>
        ))}
      </Grid>

      {/* <ProductCartWidget /> */}
    </Container>
  );
}
