"use client";
import React from "react";
import ControlSectionCard from "./controlSectionCard";
import { Grid, Stack } from "@mui/material";

const ControlSection = () => {
  const datas = [
    {
      icon: "",
      id: 1,
      title: "Хүргэлтиин төлөв хянах",
      discription: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: "",
      id: 2,
      title: "Шуурхай хүргэлт",
      discription: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: "",
      id: 3,
      title: "Эрүүл, баталгаат орц",
      discription: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: "",
      id: 4,
      title: "Хоолны өргөн сонголт",
      discription: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Stack display="flex" justifyContent="center" alignItems="center">
      {datas.map((data: any) => (
        <ControlSectionCard data={data} key={data.id} />
      ))}
    </Stack>
  );
};

export default ControlSection;
