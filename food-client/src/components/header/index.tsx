"use client";
import {
  Grid,
  Typography,
  Box,
  InputAdornment,
  Link,
  Button,
  Stack,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Pinecone, Bucket, Search, Vector } from "../icons/";
import { useRouter } from "next/navigation";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  return (
    <Box width="100vw">
      <Grid style={{ background: "white", height: "57px", display: "flex" }}>
        <Grid
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pinecone color="black" />
          <Button
            sx={{
              color: "#18BA51",
              fontSize: "14px",
              fontWeight: "700",
              marginLeft: "40px",
            }}
            onClick={() => {
              router.push("/");
            }}
          >
            НҮҮР
          </Button>
          <Button
            sx={{
              color: "black",
              fontSize: "14px",
              fontWeight: "700",
              marginLeft: "40px",
            }}
          >
            ХООЛНЫ ЦЭС
          </Button>
          <Button
            sx={{
              color: "black",
              fontSize: "14px",
              fontWeight: "700",
              marginLeft: "40px",
            }}
          >
            ХҮРГЭЛТИЙН БҮС
          </Button>
        </Grid>
        <Grid
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // background: "red",
          }}
          spacing={3}
        >
          <Stack
            spacing={10}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              id="outlined-basic"
              label=" Search"
              size="small"
              placeholder="Search Here"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <Stack direction="row" spacing={1}>
              <Button
                startIcon={<Bucket />}
                sx={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                Сагс
              </Button>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Button
                startIcon={<Vector />}
                sx={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "black",
                }}
                onClick={() => {
                  router.push("/login");
                }}
              >
                Нэвтрэх
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
