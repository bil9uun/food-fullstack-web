import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

type Props = {};

const CardSale = (props: Props) => {
  return (
    <Card sx={{ width: 282 }}>
      <CardMedia
        sx={{ height: 186, borderRadius: "16px" }}
        image="/images/food1.jpeg"
        title="food1"
      />
      <CardContent sx={{ padding: "0px", marginTop: "14px" }}>
        <Typography
          style={{ fontSize: "20px", fontWeight: 590, color: "black" }}
        >
          Өглөөний хоол
        </Typography>
        <Typography
          sx={{ fontSize: "18px", fontWeight: 600, color: "#18BA51" }}
        >
          4,800₮
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardSale;
