import { Box, Typography } from "@mui/material";
import React from "react";
import { homeContainer, homeContainerSection2 } from "./styles";

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
          <img src="/brownseaScoutLogo.png" width="60%" height="60%"></img>
        </Box>
      </Box>
    </>
  );
};

export default Home;
