"use client";
import React from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Input as MuiInput,
  Modal,
  Grid,
  Stack,
  styled,
  Switch,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close, CheckBox } from "@mui/icons-material";
import { Button, Input } from "../core";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { CategoryContext } from "@/context/categoryContext";
import { useContext, useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 22,
  p: 4,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FoodModal({
  handleClose,
  open,
  handleChange,
  handleFileChange,
  handleSave,
  checked,
  handleChangeSwitch,
}: any) {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  //For Category Selector
  const [category, setCategory] = useState("");

  const handleChangeSelect = (e: SelectChangeEvent) => {
    setCategory(e.target.value as string);
  };
  const { categories } = useContext(CategoryContext);
  console.log("hicats", categories);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h3">Хоол нэмэх хэсэг</Typography>
            <MuiButton onClick={handleClose} sx={{ fontSize: 23 }}>
              X
            </MuiButton>
          </Stack>

          <Input
            name="name"
            label="Name"
            desc="Write food name"
            onChange={handleChange}
          />
          <Input
            name="price"
            label="Price"
            desc="Write food price"
            onChange={handleChange}
          />
          <Stack display="flex" flexDirection="row" alignItems="center">
            <Switch
              name="isSale"
              checked={checked}
              onChange={handleChangeSwitch}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Sale</Typography>
          </Stack>
          <Input
            name="discountPrice"
            label="Discount Price"
            desc="Write food discount price"
            onChange={handleChange}
          />
          <Input
            name="description"
            label="Description"
            desc="Write food Description"
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Select Category"
              name="category"
              onChange={handleChange}
            >
              {categories.map((category: any) => {
                return (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <MuiButton
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </MuiButton>
          <Button label="нэмэх" onClick={handleSave}></Button>
          {handleClose}
        </Box>
      </Modal>
    </div>
  );
}
