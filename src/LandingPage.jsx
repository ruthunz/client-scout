import { Box, Container, Paper } from "@mui/material";
import React from "react";
import Navbar from "./components/navbar/Navbar";

const LandingPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "back.main",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Navbar />
      LandingPage
    </Box>
  );
};

export default LandingPage;
