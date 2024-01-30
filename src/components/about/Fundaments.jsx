import React from "react";
import { Box, Typography } from "@mui/material";

const textStyle = {
  typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5" },
  textAlign: "justify",
  padding: "16px 24px 16px 24px",
  color: "text.body",
};

const Fundaments = () => {
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
            color: "text.title",
          }}
        >
          Fundamentos del Movimiento Scout
        </Typography>
        <Typography sx={textStyle}>
          Para empezar queremos hacer referencia a dos momentos muy
          significativos del origen del Movimiento Scout, a dos bases o pilares
          del Escultismo, el primero es el de Mafeking, cuya defensa de los
          Boers que eran colonos holandeses procurando la independencia de lo
          que hoy es Sud Afrìca, hizo famoso y héroe inglés a Baden Powell
          fundador del Movimiento Scout. En esta defensa el ejercito colonial
          ingles usó un grupo de niños de jóvenes de los 9 a los 15 años en
          tareas de envío de correo, comunicaciones y otras necesidades. Esta
          experiencia demostró que cuando se dan responsabilidades a los
          jóvenes, los jóvenes la desarrollan y son capaces de muchas cosas.
          Este es uno de los pilares del escultismo, por ello se debe delegar
          responsabilidades para que los jóvenes crezcan y se desarrollen. El
          segundo momento clave de la creación del Movimiento Scout, se dio en
          el primer campamento que BP organizó en la isla de Browsea, en esta
          experiencia inicial, participaron jóvenes de los colegios de elite
          ingleses, los hijos de los amigos de BP pertenecientes a la
          aristocracia inglesa y jóvenes provenientes de las brigadas de
          jóvenes, es decir provenientes de familias de escasos recursos,
          campesinos y jóvenes trabajadores, es aquí donde BP demostró que
          todos, aprendiendo unos de otros, crecieron, que tuvieron una
          experiencia de aprendizaje significativa. Fue el grupo “mixto”, que le
          dio riqueza a la experiencia y esa vivencia es la que después se trata
          de reproducir con los Jamborees, y otras actividades internacionales y
          nacionales. Mafeking y Browsea, están en la base, son el sustento
          mismo de la idea del Movimiento Scout.
        </Typography>
        <Typography sx={textStyle}>
          Bajo el título de “El Movimiento Scout”, el Capítulo I de la
          Constitución de la OMMS se ocupa de:
        </Typography>
        <Typography sx={textStyle}>a) la definición del Escultismo.</Typography>
        <Typography sx={textStyle}>b) el propósito del Escultismo.</Typography>
        <Typography sx={textStyle}>
          c) los principios del Escultismo y su expresión en una Promesa y una
          Ley.
        </Typography>
        <Typography sx={textStyle}>d) el Método Scout.</Typography>
        <Typography sx={textStyle}>
          Todo dirigente de la ASB tiene la necesidad de conocer bien el
          contenido del presente documento para ejercer su trabajo con
          eficiencia e idoneidad.
        </Typography>
      </Box>
    </Box>
  );
};

export default Fundaments;
