import { Box, Typography } from "@mui/material";
import React from "react";
import { flame, homeContainer, homeContainerSection2 } from "./styles";

const Home = () => {
  return (
    <>
      <Box sx={homeContainer}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "450px", sm: "450px", md: "650px", lg: "650px" },
              height: { xs: "450px", sm: "450px", md: "650px", lg: "650px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/brownseaScoutLogo.png"
              width="82%"
              style={{ position: "absolute", zIndex: 100, paddingBottom: "8%" }}
            ></img>
            <Box sx={flame}></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
