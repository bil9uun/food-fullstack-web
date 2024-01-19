import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Stack,
  Modal,
} from "@mui/material";

type Props = {};

const CardDefault = (props: Props) => {
  return (
    <React.Fragment>
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
      {/* <Modal
        aria-labelledby="close-modal-title"
        open={open}
        onClose={(
          _event: React.MouseEvent<HTMLButtonElement>,
          reason: string
        ) => {
          alert(`Reason: ${reason}`);
          setOpen(false);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            minWidth: 300,
            borderRadius: "md",
            p: 3,
          }}
        >
          <Typography
            component="h2"
            id="close-modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
          >
            Modal title
          </Typography>
        </Sheet>
      </Modal> */}
    </React.Fragment>
  );
};

export default CardDefault;
