"use client";
import { Container, Link, Stack, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import Input from "../core/input";
import Button from "../core/button";
import { useRouter } from "next/navigation";

interface IStepProps {
  email: string;
  sendToEmail: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

type Props = {};

const stepOne = ({ email, sendToEmail, handleChangeInput }: IStepProps) => {
  const router = useRouter();

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
          Нууц үг сэргээх
        </Typography>
        <Stack spacing={"16px"}>
          <Input label="Имэйл" onChange={handleChangeInput} name="email" />
        </Stack>
        <Stack spacing={"32px"}>
          <Button label="Үргэлжлүүлэх" onClick={sendToEmail} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default stepOne;
