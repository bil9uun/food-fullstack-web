import React, { useState } from "react";
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
import CardModal from "../cardModal";

type Props = {};

const CardDefault = ({ filteredFood }: any) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log("Close");
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Card sx={{ width: 282, marginRight: "10px" }} onClick={handleOpen}>
        <CardMedia
          sx={{ height: 186, borderRadius: "16px" }}
          image={filteredFood.image}
          title="food1"
        />
        <CardContent sx={{ padding: "0px", marginTop: "14px" }}>
          <Typography
            style={{ fontSize: "20px", fontWeight: 590, color: "black" }}
          >
            {filteredFood.name}
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: 600, color: "#18BA51" }}
          >
            {filteredFood.price}₮
          </Typography>
        </CardContent>

        {open && (
          <CardModal
            handleClose={handleClose}
            open={open}
            food={filteredFood}
          />
        )}
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
