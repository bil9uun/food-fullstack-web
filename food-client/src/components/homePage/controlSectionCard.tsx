import { Stack } from "@mui/material";
import React from "react";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

const ControlSectionCard = ({ data }: any) => {
  return (
    <Stack sx={{ width: "265px", height: "100px", background: "cyan" }}>
      <p>{data.title}</p>
      <p>{data.discription}</p>
    </Stack>
  );
};

export default ControlSectionCard;
