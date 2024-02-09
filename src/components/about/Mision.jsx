import { Box, Typography } from "@mui/material";
import React from "react";

const textStyle = {
  typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5" },
  textAlign: "justify",
  padding: "16px 24px 16px 24px",
  color: "text.body",
};

const Mision = () => {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "brand.lightgrey",
        paddingLeft: { xs: "8px", sm: "8px", md: "12%", lg: "12%" },
        clipPath: "polygon(0 0, 100% 0, 93% 100%, 0% 100%)",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            with: "100%",
            paddingTop: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "brand.brown",
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
            }}
          >
            <Typography
              sx={{
                typography: { xs: "h5", sm: "h5", md: "h4", lg: "h4" },
                color: "white",
                fontWeight: "700",
              }}
            >
              MISION
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
              padding: "0 16px 0 16px",
              textAlign: "justify",
            }}
          >
            <Typography sx={textStyle}>
              La Misión del Movimiento Scout es contribuir a la educación de los
              jóvenes, mediante un sistema de valores basado en la Promesa y la
              Ley Scout, para ayudar a construir un mundo mejor donde las
              personas se sientan realizadas como individuos y jueguen un papel
              constructivo en la sociedad.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            with: "100%",
            paddingTop: "24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "brand.brown",
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
            }}
          >
            <Typography
              sx={{
                typography: { xs: "h5", sm: "h5", md: "h4", lg: "h4" },
                color: "white",
                fontWeight: "700",
              }}
            >
              VISION
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
              padding: "0 16px 0 16px",
              textAlign: "justify",
            }}
          >
            <Typography sx={textStyle}>
              En congruencia con la Visión de la Organización Mundial del
              Movimiento Scout, la visión específica de la Asociación de Scouts
              Brownsea, es que para 2023 los Scouts serán el movimiento juvenil
              más grande del país, permitiendo que más de cien mil jóvenes sean
              Ciudadanos activos, creando un cambio positivo en sus comunidades
              y en el mundo con base en valores compartidos.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mision;
