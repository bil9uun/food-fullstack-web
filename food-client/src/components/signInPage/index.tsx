"use client";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Input from "../core/input";
import Button from "../core/button";
import { Cloud, CloudQueue } from "@mui/icons-material/";

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <Container
      maxWidth={"sm"}
      sx={{ marginTop: "111px", marginBottom: "75px" }}
    >
      <Stack sx={{ p: "32px" }} spacing={"48px"}>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "700",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Бүртгүүлэх
        </Typography>
        <Stack spacing={"16px"}>
          <Input label="Нэр" />
          <Input label="Имэйл" />
          <Input label="Хаяг" />
          <Input label="Нууц үг" showPassword />
          <Input label="Нууц үг давтах" showPassword />
        </Stack>
        <Stack spacing={"32px"}>
          <Stack direction={"row"} spacing={"12px"}>
            <CloudQueue />
            <Typography sx={{ color: "#161616" }}>
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Typography>
          </Stack>
          <Button disabled={true} label="Бүртгүүлэх" />
        </Stack>
      </Stack>
    </Container>
  );
};

export default SignInPage;
