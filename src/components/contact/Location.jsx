import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "8px 8px 0 8px",
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
          marginBottom: "16px",
        }}
      >
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h5", md: "h4", lg: "h4" },
            color: "brand.brown",
            fontWeight: "700px",
            marginBottom: "16px",
          }}
        >
          NUESTRAS REDES Y UBICACION
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <ul>
            <li>
              <strong>Teléfono:</strong> +591 79955350
            </li>
            <li>
              <strong>Correo:</strong> gruposcoutbrownsea19@gmail.com
            </li>
          </ul>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },

            alignItems: "center",
          }}
        >
          <iframe
            src="https://www.google.com/maps/d/embed?mid=13o9mncWPwV4VVjAoxt3SfVXPnpQ70cg&ehbc=2E312F"
            width="100%"
            height="250px"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default Location;
