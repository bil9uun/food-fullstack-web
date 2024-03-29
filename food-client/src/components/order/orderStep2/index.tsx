import Button from "@/components/core/button";
import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const OrderStep2 = ({ basketFoods, formik, sum }: any) => {
  const router = useRouter();

  return (
    <Box>
      <Box display={"flex"} alignItems={"center"} gap={3}>
        <Image
          alt="stepordersvg"
          width={45}
          height={45}
          src="/images/orderStep.svg"
        />
        <div>
          <Typography component="p" variant="subtitle2">
            Алхам 2
          </Typography>
          <Typography component="p">Захиалга баталгаажуулах</Typography>
          <Typography variant="body2" component="p" sx={{ color: "#0468C8" }}>
            Хүлээгдэж байна
          </Typography>
        </div>
      </Box>

      <Stack my={5} boxShadow={3} gap={10} p={5} borderRadius={2}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
            height: "500px",
          }}
        >
          {basketFoods?.map((basketFood: any) => (
            <Box
              key={basketFood._id}
              display={"flex"}
              gap={3}
              borderTop={1}
              borderBottom={1}
              py={5}
              borderColor={"#D6D8DB"}
            >
              <div>
                <img
                  alt="basketFood img"
                  width={"180"}
                  height={"120"}
                  style={{}}
                  src={basketFood.food.image}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="h6" fontWeight={600} component="h2">
                  {basketFood.food.name}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  py={2}
                  sx={{ color: "#18BA51" }}
                >
                  {basketFood.food.price}₮
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", textAlign: "left" }}
                >
                  {basketFood.food.description}
                </Typography>
              </div>
            </Box>
          ))}
        </div>
        <Grid container bottom={0} py={10} px={10}>
          <Grid
            item
            xs={6}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
          >
            <Typography variant="body1" component="h6">
              Нийт төлөх дүн
            </Typography>
            <Typography variant="body1" fontWeight={600} component="h6">
              {" "}
              {sum}₮
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button label={"Захиалах"} onClick={formik.handleSubmit} />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
