import { Box, Typography } from "@mui/material";
import React from "react";
import ContactForm from "../components/contact/ContactForm";
import Location from "../components/contact/Location";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        height: "100%",
        width: "100%",
        backgroundColor: "brand.lightgrey",
        overflowY: "hidden",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "brand.brown",
          display: "flex",
          height: { xs: "12%", sm: "12%", md: "100%", lg: "100%" },
          flexDirection: "column",
          justifyContent: "center",
          width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
          clipPath: "polygon(0 0, 80% 0, 100% 100%, 0% 100%)",
        }}
      >
        <Typography
          sx={{
            typography: {
              xs: "h5",
              sm: "h5",
              md: "h3",
              lg: "h2",
            },
            color: "white",
          }}
        >
          GRUPO SCOUT
        </Typography>
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h5", md: "h2", lg: "h1" },
            color: "white",
            fontWeight: "700",
          }}
        >
          BROWNSEA
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: { xs: "88%", sm: "88%", md: "100%", lg: "100%" },
          width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
          overflowY: "auto",
        }}
      >
        <Location />
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
