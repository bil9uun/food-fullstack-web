"use client";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";

import * as yup from "yup";
import OrderStep1 from "./orderStep1";

import { BasketContext } from "@/context/basketContext";
import { OrderStep2 } from "./orderStep2";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { OrderContext } from "@/context/orderContext";

const validationSchema = yup.object({
  duureg: yup.string().required("Дүүрэгээ сонгоно уу"),
  khoroo: yup.string().required("Хороогоо сонгоно уу"),
  buildingNo: yup.string().required("Байрны дугаар оруулна уу"),
  info: yup.string(),
  paymentAmount: yup.number(),
  method: yup.string().required("Төлбөрийн хэрэгсэлээ сонгоно уу"),
  phone: yup.string().required("Дугаараа оруулна уу"),
});

export const OrderPage = () => {
  const { basketFoods } = useContext(BasketContext);
  const { createOrder } = useContext(OrderContext);
  console.log("basketfoods orderpage", basketFoods);
  const sum =
    basketFoods
      .map((basketFood: any) => basketFood.food.price * basketFood.count)
      .reduce((a: any, b: any) => a + b, 0) || 0;

  // const router = useRouter();
  const formik = useFormik({
    onSubmit: ({
      duureg,
      khoroo,
      buildingNo,
      info,
      paymentAmount,
      method,
      phone,
    }) => {
      createOrder(
        duureg,
        khoroo,
        buildingNo,
        info,
        paymentAmount,
        method,
        phone
      );
      // router.push("/");
    },
    initialValues: {
      duureg: "",
      khoroo: "",
      buildingNo: "",
      info: "",
      paymentAmount: sum,
      method: "",
      phone: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });
  return (
    <Grid container justifyContent={"center"} gap={40}>
      <Grid item xs={3}>
        <OrderStep1 formik={formik} />
      </Grid>
      <Grid item xs={3}>
        <OrderStep2 basketFoods={basketFoods} formik={formik} sum={sum} />
      </Grid>
    </Grid>
  );
};
