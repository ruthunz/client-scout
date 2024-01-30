import { Box, Typography } from "@mui/material";
import React from "react";

const textStyle = {
  typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5" },
  textAlign: "justify",
  padding: "16px 24px 16px 24px",
  color: "text.body",
};
const Definition = () => {
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
          Definición
        </Typography>
        <Typography sx={textStyle}>
          El Movimiento Scout se define como “un movimiento educativo, no
          político, de carácter voluntario, para jóvenes, abierto a todos sin
          distinción de clase, raza o credo, de acuerdo con el propósito, los
          Principios y el Método concebidos por el Fundador, y que se consignan
          a continuación”.
        </Typography>
        <Typography sx={textStyle}>
          Debe advertirse desde ahora que no es posible expresar todos los
          aspectos del Movimiento Scout en un enunciado distinto o
          independiente. La última frase de la definición, reconoce esto y
          destaca el hecho de que el Propósito, los Principios y el Método
          concebidos por Robert Baden-Powell, fundador del Movimiento Scout, son
          una parte integral de la definición. Estos serán tratados en detalle
          en los párrafos siguientes.
        </Typography>
        <Typography sx={textStyle}>
          aLa palabra Movimiento significa una serie de actividades organizadas,
          tendientes a cumplir un objetivo. De esta forma, un movimiento implica
          dos cosas:
        </Typography>
        <Typography sx={textStyle}>
          a) un objetivo que debe lograrse y algún tipo de organización para
          lograrlo. Además que no es estático, es algo que se mueve, que cambia
          que se ajusta permanentemente a las necesidades y expectativas de los
          jóvenes y la sociedad.
        </Typography>
        <Typography sx={textStyle}>
          b) El carácter voluntario del Escultismo enfatiza el hecho de que sus
          miembros se adhieren a él voluntaria y libremente y aceptan los
          fundamentos del Movimientos. Esto es aplicable, tanto a los jóvenes
          como a los adultos. Sin embargo, para el caso de los adultos, es decir
          de los dirigentes, debe quedar claro que hecha la adhesión
          voluntariamente, hay un conjunto de responsabilidades que se asumen y
          que deben cumplirse.
        </Typography>
        <Typography sx={textStyle}>
          Como un Movimiento educativo, el Escultismo es no político, en el
          sentido de que no se involucra en la lucha por el poder, que es el
          centro de acción de los políticos y que generalmente se refleja en el
          sistema de partidos políticos, es decir se podría decir que es “no
          partidario”. Es una característica esencial del Movimiento. Sin
          embargo, esto no significa que el Escultismo se encuentre
          completamente alejado de las realidades políticas dentro de un país
          determinado. En primer lugar, se trata de un Movimiento cuyo objetivo
          es desarrollar una ciudadanía responsable; esta educación cívica no
          puede realizarse sin considerar las realidades políticas dentro de un
          país. En segundo lugar, es un Movimiento que se basa en varios
          principios, leyes y creencias fundamentales, los cuales condicionan
          las opciones políticas de sus miembros.
        </Typography>
        <Typography sx={textStyle}>
          El Escultismo se define como un movimiento educativo. Esta es
          indudablemente, su característica esencial y por ello, se desarrolla
          esa característica en forma más extensa en los puntos siguientes.
        </Typography>
        <Typography sx={textStyle}>
          En el sentido más amplio del término, educación puede definirse como
          un proceso que tiende al total desarrollo de las capacidades de una
          persona. Por lo tanto, el Escultismo debe diferenciarse claramente de
          un movimiento de tipo meramente recreativo. A pesar de la importancia
          de las actividades recreativas en el Movimiento, éstas se conciben con
          un medio para llegar a un fin y no como un fin en sí mismas.
        </Typography>
        <Typography sx={textStyle}>
          La educación debe distinguirse también del proceso de adquisición de
          conocimientos o habilidades específicas. Como se define en el párrafo
          anterior, la educación comprende el desarrollo de actitudes, “aprender
          a conocer”, y el desarrollo de actitudes, “aprender a ser”, mientras
          que el proceso de adquisición de conocimientos o habilidades
          específicas es un medio para contribuir a un fin, siendo éste, la
          educación. En las palabras del Fundador; “Es aquí pues, donde radica
          el fin más importante del adiestramiento, educar; téngalo presente, no
          instruir, sino educar, es decir, estimular al niño para que aprenda
          por sí mismo, por su propio gusto, las cosas que tienden a formar su
          carácter”.
        </Typography>
        <Typography sx={textStyle}>
          {" "}
          Generalmente, la palabra educación se asocia con el sistema escolar.
          Sin embargo, ésta es sólo una forma de educación. De acuerdo con la
          UNESCO, se pueden distinguir tres tipos de educación. Educación
          Formal, que es el sistema educacional estructurado jerárquicamente,
          clasificado en forma cronológica, que abarca desde la escuela primaria
          hasta la universidad. Educación Informal, que es el proceso a lo largo
          de toda la vida, donde cada individuo adquiere actitudes, valores,
          habilidades y conocimientos, por medio de la experiencia diaria y de
          las influencias y recursos educativos de su entorno.
        </Typography>
        <Typography sx={textStyle}>
          Educación no Formal, que es la actividad educativa organizada, externa
          al sistema formal establecido, y que tiene como propósito servir a
          universos y objetivos de aprendizaje identificables.{" "}
        </Typography>
        <Typography sx={textStyle}>
          El Escultismo pertenece al último tipo de educación, ya que, al mismo
          tiempo que se desarrolla fuera del sistema educativo formal, es una
          institución organizada que tiene un fin educativo y está dirigido a un
          público predeterminado.
        </Typography>
        <Typography sx={textStyle}>
          El Escultismo se dirige a los jóvenes; es un movimiento juvenil, en el
          que la función de los adultos consiste en ayudarle a los jóvenes a
          lograr los objetivos del Escultismo.
        </Typography>
        <Typography sx={textStyle}>
          El Escultismo está abierto a todos, sin distinción de origen, raza,
          clase o credo. De este modo, uno de los preceptos básicos del
          Movimiento es el principio de no discriminación, basta que la persona
          se adhiera voluntariamente al Propósito, a los Principios y al Método
          Scout.
        </Typography>
      </Box>
    </Box>
  );
};

export default Definition;
