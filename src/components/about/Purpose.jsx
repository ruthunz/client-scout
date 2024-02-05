import React from "react";
import { Box, Typography } from "@mui/material";
const textStyle = {
  typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5" },
  textAlign: "justify",
  padding: "16px 24px 16px 24px",
  color: "text.body",
};
const Purpose = () => {
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
            color: "text.title",
          }}
        >
          Proposito del Movimiento Scout
        </Typography>
        <Typography sx={textStyle}>
          El propósito de un movimiento es la razón que fundamenta su
          existencia; representa su objetivo o finalidad. El propósito del
          Movimiento Scout es “contribuir al desarrollo de la juventud mediante
          la realización plena de sus potenciales espirituales, sociales,
          intelectuales y físicos como individuos, como ciudadanos responsables
          y como miembros de sus comunidades local, nacional e internacional”.
        </Typography>
        <Typography sx={textStyle}>
          Esta declaración del propósito, enfatiza el carácter educativo del
          Movimiento, que aspira al desarrollo pleno de las capacidades de una
          persona. Uno de los principios básicos de la educación es que las
          dimensiones del ser humano, específicamente, la física, la
          intelectual, la social y la espiritual, no pueden desarrollarse por
          separado. El proceso de desarrollo de una persona es, por definición,
          integral.
        </Typography>
        <Typography sx={textStyle}>
          Debe advertirse que la formulación del propósito del Movimiento Scout
          hace hincapié en el hecho de que el Escultismo no es más que uno de
          los muchos factores que contribuyen al desarrollo de los jóvenes. En
          consecuencia, el Escultismo no está dirigido a reemplazar a la
          familia, a la escuela, a las instituciones religiosas o a las
          instituciones de tipo social; ha sido concebido como complemento de la
          acción educativa de esas instituciones.
        </Typography>
        <Typography sx={textStyle}>
          También es importante señalar que el concepto de ciudadanía
          responsable, que es una de las metas fundamentales del Escultismo,
          debe entenderse en su contexto más amplio. De este modo, una persona
          es, antes que nada, un individuo. Este individuo está integrado a su
          comunidad local, la que es parte de una estructura política más amplia
          (municipio, departamento, etc.), cuya expresión máxima es el Estado
          soberano o país. Este último es, a su vez, un miembro de la comunidad
          internacional. Un ciudadano responsable debe estar consciente de sus
          derechos y obligaciones en relación con las diversas comunidades a que
          pertenece.
        </Typography>
      </Box>
    </Box>
  );
};

export default Purpose;
