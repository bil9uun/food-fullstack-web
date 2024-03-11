import React, { useContext, useState } from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Grid,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close } from "@mui/icons-material";
import { BasketContext } from "@/context/basketContext";

const style = {
  width: 538,
  borderRadius: 5,
};

const DrawerCard = ({ basketFood }: any) => {
  const [count, setCount] = useState(basketFood.count);
  const { updateFoodToBasket } = useContext(BasketContext);

  console.log("basketfood", basketFood);

  const handleCount = (operation: string, foodId: string) => {
    console.log("foodId", operation, foodId);
    if (operation === "add") {
      count < 10 && setCount(count + 1);
    } else {
      count !== 1 && setCount(count - 1);
    }
    updateFoodToBasket({
      foodId: basketFood.food._id,
      count: operation === "add" ? count + 1 : count - 1,
      totalPrice:
        operation === "add"
          ? (count + 1) * basketFood.price
          : (count - 1) * basketFood.price,
    });
  };
  const backgroundImageStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "245px",
    height: "150px",
  };
  const { deleteBasket } = useContext(BasketContext);
  const handleFoodDelete = (delFoodId: any) => {
    deleteBasket(delFoodId);
  };

  return (
    <>
      <Box sx={style} m={5}>
        <Grid container display={"flex"} flexDirection={"row"} gap={10}>
          <img src={basketFood?.food?.image} style={backgroundImageStyle} />
          <Grid
            item
            xs={5}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
          >
            <Grid item xs={1} position={"relative"}>
              <MuiButton
                sx={{ ml: 50, position: "absolute" }}
                onClick={() => handleFoodDelete(basketFood?.food?._id)}
              >
                <Close />
              </MuiButton>
            </Grid>
            <Grid display={"flex"} flexDirection={"column"}>
              <Typography fontWeight={600}>{basketFood?.food?.name}</Typography>
              <Typography sx={{ color: "#18BA51" }} fontWeight={600}>
                {basketFood?.food?.price}
              </Typography>

              <Typography color={"gray"}>
                {basketFood?.food?.description}
              </Typography>

              <div>
                <MuiButton
                  onClick={() => handleCount("min", basketFood.food._id)}
                >
                  <Remove
                    sx={{
                      bgcolor: "#18BA51",
                      color: "white",
                      width: "70%",
                      height: "30px",
                      borderRadius: 2,
                    }}
                  />
                </MuiButton>
                <input
                  type="text"
                  value={count}
                  style={{
                    width: "60px",
                    border: "none",
                    textAlign: "center",
                    paddingTop: 4,
                    paddingBottom: 4,
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                />
                <MuiButton
                  onClick={() => handleCount("add", basketFood.food._id)}
                >
                  <Add
                    sx={{
                      bgcolor: "#18BA51",
                      color: "white",
                      width: "70%",
                      height: "30px",
                      borderRadius: 2,
                    }}
                  />
                </MuiButton>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  );
};

export default DrawerCard;
