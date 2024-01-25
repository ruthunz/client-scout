import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { homeContainer, homeContainerSection2 } from "./styles";

const Home = () => {
  return (
    <>
      <Box sx={homeContainer}>
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "40%" } }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              bgcolor: "rgba(28, 27, 27, 0.8)",
              fontWeight: "700",
              padding: "24px 24px 24px 24px",
            }}
          >
            Las buenas acciones nos ayudan a construir un MUNDO MEJOR!
          </Typography>
        </Box>
        <Box sx={{ width: { xs: 0, sm: 0, md: "50%", lg: "60%" } }}></Box>
      </Box>
    </>
  );
};

export default Home;
