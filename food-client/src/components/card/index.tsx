import { Card, CardMedia } from "@mui/material";
import React from "react";

type Props = {};

const CardDefault = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 282 }}>
      <CardMedia sx={{ height: 300 }} title="test" image="/footerSvg.svg" />
    </Card>
  );
};

export default CardDefault;
