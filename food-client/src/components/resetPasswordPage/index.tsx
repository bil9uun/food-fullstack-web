"use client";

import { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import Input from "../core/input";
import Button from "../core/button";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";

const MyStepper = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [user, setUser] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const sendToEmail = async () => {
    try {
      const data = await axios.post("http://localhost:8080/verify/send-email", {
        email: user.email,
      });
      console.log("email user", user.email);
      handleNext();
    } catch (error) {
      toast.error("Email илгэээхэд алдаа гарлаа.");
      console.log("ERR", error);
    }
  };

  const handleNext = async () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log("user", user);

  return (
    <Container>
      {activeStep === 1 && (
        <StepOne
          email={user.email}
          sendToEmail={sendToEmail}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 2 && (
        <StepTwo
          email={user.email}
          otp={user.otp}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 3 && <StepThree />}
    </Container>
  );
};

export default MyStepper;
