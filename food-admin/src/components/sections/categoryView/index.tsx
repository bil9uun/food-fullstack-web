"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import Iconify from "@/components/iconify";

import CategoryCard from "./category-card";
import CategorySort from "./category-sort";
import CategorySearch from "./category-search";

import axios from "axios";

// ----------------------------------------------------------------------
import { faker } from "@faker-js/faker";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "@/context/categoryContext";
import CategoryModal from "@/components/categoryModal";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function CategoryView() {
  const { categories } = useContext(CategoryContext);
  // console.log(categories);

  //For Modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { handleChangeModalInput, handleFileChange, uploadImage } =
    useContext(CategoryContext);
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Ангилалын жагсаалт</Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={handleOpen}
        >
          Шинэ ангилал
        </Button>
      </Stack>

      <Stack
        mb={5}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* <CategorySearch categories={categories} /> */}
        <CategorySort
          options={[
            { value: "latest", label: "Cүүлийнх" },
            { value: "popular", label: "Түгээмэл" },
            { value: "oldest", label: "Өмнөх" },
          ]}
        />
      </Stack>

      <Grid container spacing={3}>
        {categories.map((category: any) => (
          <CategoryCard category={category} />
        ))}
      </Grid>
      <CategoryModal
        handleClose={handleClose}
        open={open}
        handleChange={handleChangeModalInput}
        handleFileChange={handleFileChange}
        handleSave={uploadImage}
      />
    </Container>
  );
}
