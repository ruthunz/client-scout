import { Box, Typography } from "@mui/material";
import React from "react";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <Box
      mt={8}
      sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "background.primary",
          display: "flex",
          height: { xs: "10vh", sm: "10vh", md: "93vh", lg: "93vh" },
          flexDirection: "column",
          justifyContent: "center",
          width: { xs: "100%", sm: "100%", md: "40%", lg: "40%" },
        }}
      >
        <Typography
          sx={{
            typography: {
              xs: "h5",
              sm: "h5",
              md: "h2",
              lg: "h1",
            },
            color: "white",
          }}
        >
          BROWNSEA
        </Typography>
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h5", md: "h2", lg: "h1" },
            color: "white",
            fontWeight: "700",
          }}
        >
          SCOUTS
        </Typography>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" },
        }}
      >
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
