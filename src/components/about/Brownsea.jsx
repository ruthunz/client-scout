import { Box, Divider, Typography } from "@mui/material";
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
            width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
          }}
        >
          <img src="/banner1brownsea.jpg" width="100%"></img>
        </Box>
        <Divider sx={{ margin: "32px 0 32px 0" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              ...textStyle,
              width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
            }}
          >
            <Typography
              sx={{
                typography: { xs: "h4", sm: "h4", md: "h3", lg: "h3" },
                textAlign: "start",
                padding: "24px 16px 16px 16px",
                color: "brand.brown",
              }}
            >
              QUE HACEMOS
            </Typography>
            Impulsamos la formación del carácter en la niñez y juventud de
            nuestro país, complementando la educación de sus miembros mediante
            el acercamiento a la naturaleza, la participación activa en la
            sociedad, las expresiones de la cultura y de los valores
            trascendentales.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "24px 0px 16px 0px",
              color: "brand.brown",
              backgroundImage: `url(/infancia.jpg)`,
              backgroundSize: "cover",
              margin: "24px 0 24px 0",
            }}
          >
            <Typography
              sx={{
                typography: { xs: "h3", sm: "h3", md: "h2", lg: "h2" },
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                backgroundColor: "rgba(169, 164, 168, 0.7)",
                color: "brand.brown",
                width: "100%",
                margin: "24px 0 24px 0",
              }}
            >
              INFANCIA
            </Typography>
          </Box>
          <Typography
            sx={{
              ...textStyle,
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
            }}
          >
            Se persigue realizar iniciativas a través de acciones en el marco de
            la educación en el ocio y el tiempo libre, fomentando la calidad de
            vida, la inclusión social, la convivencia, la participación, así
            como el aprendizaje de los derechos de la infancia, su
            reivindicación y detección de situaciones en las que son vulnerados,
            contribuyendo de esta manera al desarrollo personal. Se buscan
            espacios que han fomenten la participación real y efectiva.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row-reverse",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "24px 0px 16px 0px",
              color: "brand.brown",
              backgroundImage: `url(/juventud.jpg)`,
              backgroundSize: "cover",
            }}
          >
            <Typography
              sx={{
                typography: { xs: "h3", sm: "h3", md: "h2", lg: "h2" },
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                backgroundColor: "rgba(169, 164, 168, 0.7)",
                color: "brand.brown",
                width: "100%",
                margin: "24px 0 24px 0",
              }}
            >
              JUVENTUD
            </Typography>
          </Box>
          <Typography
            sx={{
              ...textStyle,
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
            }}
          >
            Se trabajan diferentes programas de educación para la salud con
            iniciativas o actividades orientadas hacia la prevención de
            adicciones desde el tiempo libre, la prevención de VIH y otras ITS y
            el emprendimiento e innovación social. Para ello, se realizan
            talleres sobre hábitos de vida saludable, actividades al aire libre,
            deportes, sesiones de educación vial, actividades para la prevención
            de adicciones sin sustancia, acciones sobre salud sexual y salud
            mental y un largo etcétera, aplicando siempre la perspectiva de
            género.
          </Typography>
        </Box>
        <Divider sx={{ margin: "24px 0 24px 0" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              ...textStyle,
              width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
            }}
          >
            <Typography
              sx={{
                typography: { xs: "h4", sm: "h4", md: "h3", lg: "h3" },
                textAlign: "start",
                padding: "24px 16px 16px 16px",
                color: "brand.brown",
              }}
            >
              MEDIO AMBIENTE
            </Typography>
            Desde siempre la educación scout ha tenido un importante componente
            de relación con la Naturaleza, siendo una escuela esencial para la
            formación del carácter, el desarrollo de la sensibilidad y el
            enriquecimiento de las personas. Nos planteamos el Medio Ambiente
            como un elemento imprescindible entendiendo que la formación e
            información en materia medioambiental y sostenibilidad son
            prioritarias para la creación de una conciencia crítica y
            responsable en la ciudadanía.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row-reverse",
            margin: "24px 16px 16px 16px",
            height: "300px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "8px 8px 8px 8px",
            }}
          >
            <img src="/basura.jpg" width="100%"></img>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "8px 8px 8px 8px",
            }}
          >
            <img src="/basura2.jpg" width="100%"></img>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Brownsea;
