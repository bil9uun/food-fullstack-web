import { Box, Container, Stack, Typography } from "@mui/material";
import { url } from "inspector";
import React from "react";
import { Pinecone } from "../icons";
import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material/";
import { ST } from "next/dist/shared/lib/utils";
type Props = {};

const Footer = (props: Props) => {
  const footerWords = [
    "Нүүр",
    "Холбоо барих",
    "Хоолны цэс",
    "Үйлчилгээний нөхцөл",
    "Хүргэлтийн бүс",
    "Нууцлалын бодлого",
  ];
  return (
    <Stack
      style={{
        background: "#18BA51",
        width: "100%",
        height: "545px",
        backgroundImage: 'url("/footerSvg.svg")',
        paddingTop: "114px",
        paddingLeft: "120px",
        paddingRight: "120px",
        paddingBottom: "114px",
      }}
    >
      <Stack style={{ width: "100%", height: "100%" }} spacing="40px">
        <Stack
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Pinecone color="white" />
          <Typography
            style={{ color: "white", fontWeight: "700", fontSize: "20px" }}
          >
            Food Delivery
          </Typography>
        </Stack>
        <Stack
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{
            fontSize: "16px",
            fontWeight: "590",
            color: "white",
          }}
        >
          {footerWords.map((footerWord) => {
            return <a>{footerWord}</a>;
          })}
        </Stack>
        <Stack
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <FacebookRounded sx={{ color: "white" }} fontSize="large" />
          <Instagram sx={{ color: "white" }} fontSize="large" />
          <Twitter sx={{ color: "white" }} fontSize="large" />
        </Stack>
        <Stack sx={{ width: "100%", height: "1px", background: "white" }} />
        <Stack spacing={1} justifyContent="center" alignItems="center">
          <Typography
            style={{ fontSize: "16px", fontWeight: "400", color: "white" }}
          >
            © 2024 Pinecone Foods LLC
          </Typography>
          <Typography
            style={{ fontSize: "16px", fontWeight: "400", color: "white" }}
          >
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
