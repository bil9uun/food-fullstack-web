"use client";
import { Box, Divider, Drawer, Grid, Typography } from "@mui/material";
import Button from "../core/button";
import { FaChevronLeft } from "react-icons/fa";

import React, { useContext, useEffect, useState } from "react";
import DrawerCard from "./drawerCard";
import { BasketContext } from "@/context/basketContext";
import { UserContext } from "@/context/userProvider";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IBasketDrawerModal {
  open: boolean;
  handleClose: () => void;
}

const BasketDrawer = ({ handleClose, open }: IBasketDrawerModal) => {
  const { basketFoods } = useContext(BasketContext);
  console.log("basketFoods in client", basketFoods);

  const totalPrice = basketFoods
    ?.map((basketFood: any) => basketFood?.food.price * basketFood?.count)
    .reduce((a: any, b: any) => a + b, 0);

  const router = useRouter();
  const drawerCloser = () => {
    router.push("/order");
    handleClose();
  };

  return (
    <>
      <React.Fragment>
        <Drawer open={open} onClose={handleClose} anchor="right">
          <Box width={584} p={5}>
            <Box
              pb={5}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FaChevronLeft />
              <Typography fontWeight={600}>Таны сагс</Typography>
              <Typography></Typography>
            </Box>
            <Divider />
            {basketFoods?.map((basketFood: any) => {
              return <DrawerCard basketFood={basketFood} />;
            })}
          </Box>
          <Grid
            container
            position={"sticky"}
            bottom={0}
            boxShadow={6}
            bgcolor={"white"}
            py={10}
            px={5}
          >
            <Grid
              item
              xs={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              pl={5}
            >
              <Typography variant="body1" component="h6">
                Нийт төлөх дүн
              </Typography>
              <Typography variant="body1" fontWeight={600} component="h6">
                {totalPrice}₮
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button label={"Захиалах"} onClick={() => drawerCloser()} />
            </Grid>
          </Grid>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default BasketDrawer;
