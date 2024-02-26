import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import { FaChevronLeft } from "react-icons/fa";

import React, { useContext, useEffect, useState } from "react";
import DrawerCard from "./drawerCard";
import { BasketContext } from "@/context/basketContext";
import { UserContext } from "@/context/userProvider";
import axios from "axios";

interface IBasketDrawerModal {
  open: boolean;
  handleClose: () => void;
}

const BasketDrawer = ({ handleClose, open }: IBasketDrawerModal) => {
  const { basketFoods } = useContext(BasketContext);
  console.log("basketFoods in client", basketFoods);

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
            {basketFoods.map((basketFood: any) => {
              return <DrawerCard basketFood={basketFood} />;
            })}
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default BasketDrawer;
