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

const CardDefault = ({ filteredFood }: any) => {
  return (
    <React.Fragment>
      <Card sx={{ width: 282, marginRight: "10px" }}>
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
