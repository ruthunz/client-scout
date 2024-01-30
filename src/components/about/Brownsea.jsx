import { Box, Typography } from "@mui/material";
import React from "react";

const textStyle = {
  typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5" },
  textAlign: "justify",
  padding: "16px 24px 16px 24px",
  color: "text.body",
};

const Brownsea = () => {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "brand.lightgrey",
        paddingLeft: { xs: "8px", sm: "8px", md: "12%", lg: "12%" },
        clipPath: "polygon(0 0, 100% 0, 91% 100%, 0% 100%)",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "90%",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Typography
          sx={{
            typography: { xs: "h4", sm: "h4", md: "h3", lg: "h3" },
            textAlign: "center",
            padding: "24px 16px 16px 16px",
            color: "brand.brown",
          }}
        >
          BROWNSEA
        </Typography>
        <Typography sx={textStyle}>
          El Movimiento Scout Brownsea es un movimiento de educación no formal,
          voluntario y apolítico, cuyo propósito es contribuir a la educación de
          los niños y jóvenes a través de un sistema de valores para ayudar a
          construir un mundo mejor.
        </Typography>
        <img src="/groupphoto.jpg" width="100%"></img>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: "16px",
          }}
        >
          <Typography
            sx={{
              ...textStyle,
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
            }}
          >
            Impulsamos la formación del carácter en la niñez y juventud de
            nuestro país, complementando la educación de sus miembros, mediante
            el acercamiento a la naturaleza como fuente de ubicación en el mundo
            que nos rodea y mediante la participación activa en la sociedad, en
            las expresiones de la cultura y de los valores trascendentales.
          </Typography>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
            }}
          >
            <img src="/teaching.jpg" width="100%"></img>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Brownsea;
