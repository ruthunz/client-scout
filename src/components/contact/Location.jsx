import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        height: "50%",
        justifyContent: "center",
        alignContent: "center",
        overflowY: "auto",
        padding: "64px 8px 0 8px",
        backgroundColor: " coral",
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
          width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
          marginBottom: "16px",
        }}
      >
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h5", md: "h4", lg: "h4" },
            color: "black",
            fontWeight: "700px",
            marginBottom: "16px",
          }}
        >
          NUESTRAS REDES
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur?
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
        }}
      >
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h5", md: "h4", lg: "h4" },
            color: "black",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          NUESTRA UBICACION
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1JThFFDHU8MT9DyiQYOVWV0_aYskx6Dhu&ehbc=2E312F"
            width="98%"
            height="250px"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default Location;
