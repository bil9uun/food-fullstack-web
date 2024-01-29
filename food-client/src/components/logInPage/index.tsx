"use client";
import Input from "../core/input";
import Button from "../core/button";
import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

const LogInPage = (props: Props) => {
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
          Нэвтрэх
        </Typography>
        <Stack spacing={"16px"}>
          <Input label="Имэйл" />
          <Input label="Нууц үг" showPassword />
          <Typography
            sx={{ alignSelf: "flex-end", fontSize: "14px", color: "#3F4145" }}
          >
            <Link
              style={{ textDecoration: "none", color: "#18BA51" }}
              href={"/resetPassword"}
            >
              Нууц үг сэргээх
            </Link>
          </Typography>
        </Stack>
        <Stack spacing={"32px"}>
          <Button label="Нэвтрэх" disabled={false} />
          <Typography sx={{ color: "#3F4145", alignSelf: "center" }}>
            Эсвэл
          </Typography>
          <Button
            btnType="outlined"
            label="Бүртгүүлэх"
            onClick={() => {
              router.push("/signin");
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default LogInPage;
