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
              width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" },
            }}
          >
            <img src="/brownseaScoutLogo.png" width="100%"></img>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
//<img src="/brownseaScoutLogo.png" width="100%"></img>
//<Box sx={flame}></Box>

/*
<Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" },
              backgroundColor: "black",
              position: "relative",
              // width: "400px",
              // height: "400px",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <img
              src="/brownseaScoutLogo.png"
              width="100%"
              style={{ position: "absolute", zIndex: 100 }}
            ></img>
            <Box sx={flame}></Box>
          </Box>
*/
