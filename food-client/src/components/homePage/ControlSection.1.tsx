import React from "react";
import ControlSectionCard from "./controlSectionCard";

export const ControlSection = () => {
  const datas = [
    {
      icon: "",
      title: "Хүргэлтиин төлөв хянах",
      discription: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: "",
      title: "Шуурхай хүргэлт",
      discription: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: "",
      title: "Эрүүл, баталгаат орц",
      discription: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: "",
      title: "Хоолны өргөн сонголт",
      discription: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <div>
      {datas.map((data: Array) => {
        <ControlSectionCard data={data} />;
      })}
    </div>
  );
};
