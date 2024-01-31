"use client";
import { Container, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Input from "../core/input";
import Button from "../core/button";
import { Cloud, CloudQueue } from "@mui/icons-material/";
import * as yup from "yup";
import { useFormik } from "formik";
import { UserContext } from "@/context/userProvider";

type Props = {};

const SignInPage = (props: Props) => {
  const { logIn } = useContext(UserContext);

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Neree zaaval oruulna uu")
      .max(25, "Ner ihdee 25 temdegt aguulna")
      .min(5, "Ner bagadaa 5 temdegt baina"),

    email: yup
      .string()
      .matches(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        "Ta email ee zuv oruulna uu"
      )
      .max(50, "email hayag 50 temdegtees hetreheergui bailgana uu")
      .required("Email haygiig zaaval buglunu uu")
      .email("Huchintei email hayg baih ystoi"),
    address: yup.string().required("Hayg zaaval oruulna uu"),
    password: yup
      .string()
      .required("Nuuts ugee zaaval buglunu uu")
      .min(6, "Nuuts ug hamgiin bagadaa 6 temdegt baih ystoi"),
    repassword: yup
      .string()
      .oneOf([yup.ref("password")], "Nuuts ug hoorondoo taarahgui baina")
      .required("Davtan nuuts ugee zaaval buglunu uu")
      .min(6, "Davtan nuuts ug hamgiin bagadaa 6 temdegt baih ystoi"),
  });

  const formik = useFormik({
    onSubmit: ({ email, password }) => {
      console.log(email), console.log(password);
      logIn(email, password);
    },
    initialValues: {
      email: "",
      password: "",
      name: "",
      address: "",
      repassword: "",
    },
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
          Бүртгүүлэх
        </Typography>
        <Stack spacing={"16px"}>
          <Input
            label="Нэр"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            errorText={formik.errors.name}
          />
          <Input
            label="Имэйл"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errorText={formik.errors.email}
          />
          <Input
            label="Хаяг"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            errorText={formik.errors.address}
          />
          <Input
            label="Нууц үг"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            showPassword
          />
          <Input
            label="Нууц үг давтах"
            name="repassword"
            value={formik.values.repassword}
            onChange={formik.handleChange}
            errorText={formik.errors.repassword}
            showPassword
          />
        </Stack>
        <Stack spacing={"32px"}>
          <Stack direction={"row"} spacing={"12px"}>
            <CloudQueue />
            <Typography sx={{ color: "#161616" }}>
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Typography>
          </Stack>
          <Button
            disabled={false}
            label="Бүртгүүлэх"
            onClick={formik.handleSubmit}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default SignInPage;
