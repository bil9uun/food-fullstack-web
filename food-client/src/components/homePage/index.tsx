import React from "react";

import CardDefault from "@/components/card";
import CardSale from "@/components/card/cardSale";
import { Container, Grid, Stack, Typography } from "@mui/material";
import IntroductionHomePage from "./introductionHomePage";
import ControlSection from "./controlSection";

const HomePage = () => {
  return (
    <div>
      <IntroductionHomePage />
      <Container>
        <ControlSection />
      </Container>
    </div>
  );
};

export default HomePage;
