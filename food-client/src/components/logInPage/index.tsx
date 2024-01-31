"use client";
import Input from "../core/input";
import Button from "../core/button";
import React, { useContext } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserContext } from "@/context/userProvider";
import { useFormik } from "formik";
import * as yup from "yup";

type Props = {};

const LogInPage = (props: Props) => {
  const router = useRouter();
  const { user, logIn } = useContext(UserContext);

  const validationSchema = yup.object({
    email: yup
      .string()
      .matches(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        "Ta email ee zuv oruulna uu"
      )
      .max(50, "email hayag 50 temdegtees hetreheergui bailgana uu")
      .required("Email haygiig zaaval buglunu uu")
      .email("Huchintei email hayg baih ystoi"),
    password: yup
      .string()
      .required("Nuuts ugee zaaval buglunu uu")
      .min(6, "Nuuts ug hamgiin bagadaa 6 temdegt baih ystoi"),
  });

  const formik = useFormik({
    onSubmit: ({ email, password }) => {
      console.log(email), console.log(password);
      logIn(email, password);
    },
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

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
          <Input
            name="email"
            label="Имэйл"
            value={formik.values.email}
            onChange={formik.handleChange}
            errorText={formik.errors.email}
          />
          <Input
            name="password"
            label="Нууц үг"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            showPassword
          />
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
          <Button
            label="Нэвтрэх"
            disabled={false}
            onClick={formik.handleSubmit}
          />
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
