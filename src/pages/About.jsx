import { Box } from "@mui/material";
import React, { Suspense } from "react";
import Sidebar from "../components/about/Sidebar";
import { Outlet } from "react-router-dom";

const About = ({ sideBarLinks }) => {
  return (
    <Box
      sx={{
        backgroundColor: "brand.grey",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "92%",
        width: "100%",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: { xs: "100%", sm: "100%", md: "76%", lg: "76%" },
        }}
      >
        <Suspense fallback="Loading">
          <Outlet />
        </Suspense>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "24%", lg: "24%" },
          backgroundColor: "brand.brown",
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <Sidebar navLinks={sideBarLinks}></Sidebar>
      </Box>
    </Box>
  );
};
export default About;
