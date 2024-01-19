"use client";
import { Grid, Button, Typography, Stack } from "@mui/material";

import Header from "@/components/header";
import Footer from "@/components/footer";
import CardDefault from "@/components/card";
import CardSale from "@/components/card/cardSale";
export default function Home() {
  return (
    <main>
      <Grid container>
        <Header />
        <Stack spacing={5}>
          <CardDefault />
          <CardSale />
        </Stack>
        <Stack>
          <div className="wrapped">
            <div>
              <h1>Hello</h1>
            </div>
            <div>
              <h1>Hello-2</h1>
            </div>
          </div>
        </Stack>
        <Footer />
      </Grid>
    </main>
  );
}
