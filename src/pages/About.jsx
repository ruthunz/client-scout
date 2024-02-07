import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../components/about/Sidebar";
import { Routes, Route, Outlet } from "react-router-dom";
import Brownsea from "../components/about/Brownsea";
import Fundaments from "../components/about/Fundaments";

const SideBarLinks = [
  { title: "Brownsea", path: "/about/brownsea" },
  { title: "Fundamentos del Movimiento", path: "/about/fundaments" },
  { title: "Definicion", path: "/about/definition" },
  { title: "Propósito del Movimiento", path: "/about/purpose" },
  { title: "Misión y Visión", path: "/about/mision" },
];

const About = () => {
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
        <Outlet />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "24%", lg: "24%" },
          backgroundColor: "brand.brown",
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <Sidebar navLinks={SideBarLinks}></Sidebar>
      </Box>
    </Box>
  );
};
export default About;
