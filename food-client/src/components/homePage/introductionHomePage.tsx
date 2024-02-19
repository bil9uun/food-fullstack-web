import { Stack, Typography } from "@mui/material";
import React from "react";

const IntroductionHomePage = () => {
  return (
    <div>
      <Stack
        sx={{
          background: "#18BA51",
          backgroundImage: 'url("/images/footerSvg.svg")',
          width: "100%",
          height: "788px",
        }}
        display="flex"
        justifyContent="center"
        padding={30}
        position="relative"
      >
        <Stack width={"384px"} spacing={10}>
          <Typography
            sx={{ fontSize: "55px", fontWeight: "600", color: "white" }}
          >
            Pinecone Food delivery
          </Typography>
          <Stack sx={{ borderTop: 1, borderColor: "white" }} />
          <Typography
            sx={{
              fontSize: "22px",
              color: "white",
              fontWeight: "300",
            }}
          >
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>

        <img
          style={{
            width: "590px",
            position: "absolute",
            left: "730px",
            top: "120px",
          }}
          src="https://s3-alpha-sig.figma.com/img/0735/ebea/ea841e6608a7206e8f3e2cbcdcb911cf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZ9ESkJp7lcaRWZv1pozJ6zTDRZIs3wXyYgxPfOfqp~7tBbMlJx3tCSN9V~yUlc9l8RMiJq1LNGfqWwwcKbGYdA82JXntFZRSpNtH5~e5k0IdwYLhbzlQ~0XV2pUsFtdhYzGwb0ySFqhtYipbpqqwGsyaI0ipm7~FLJXppGr8C6s0y7srJCtgWMyj0XBG8p~7sydouPM0txqx69LaBhBk3Cd-aZwvFDZrGzKQ-dNf-VFf7D9nsHxvME7zTzrmnCgtJgEGMD82v76P7ohWex8zsXfQd7oPV35D08E-AFDAthBx2tOrOeb16YbetJqr-3~nlzVF2J4GcIMLfw1SZdtoQ__"
        />
        <img
          style={{
            width: "300px",
            position: "absolute",
            left: "1067px",
            top: "300px",
          }}
          src="https://s3-alpha-sig.figma.com/img/7e09/e5d0/2949632a6a2df2f49b384d2050707197?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsfJDblASiA5bcjEhHPFGuic8CCNEqlUDGQvVHA97BcxvO-NgOc90V-ca0A-l3kz0qf18SXtI3wxZeBRtqum2otCfSyroAEZWqI7MWPVcGeyyv62c4mVhzpCKDQq7~RaBZk0fSzeWjmrIT3qqoZa5OePnryOmkVYN8TVSKBpJ8BgTY7T~nytYjbxHM7j7mQaqzd6SFDjAiR2zXGY4yYvloAizB5bpOa3tR5M3X6~PLXmztTm4UADVC8GSaVU80-GI25-FeTwtxK6N7CNm346nCuoIUFtM4zMWJSockZKLqbOFASOzDl12XxfA04ktbGtXruPPVOrNiixSWOPiyg5fA__"
        />
      </Stack>
    </div>
  );
};

export default IntroductionHomePage;
