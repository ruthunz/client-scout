import { Box, Typography } from "@mui/material";
import React from "react";

const titles = { fontWeight: "bold" };

const EventInfo = ({ event }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100%",
        padding: "8px",
        overflowY: "auto",
      }}
    >
      <Box sx={{ width: { xs: "100%", sm: "100%", md: "30%", lg: "30%" } }}>
        <Typography sx={titles}>Tipo: </Typography>
        <Typography>
          <ul>
            <li>{event.type}</li>
          </ul>
        </Typography>
        <Typography sx={titles}>Ramas:</Typography>
        <Typography>
          <ul>
            {event.branches.map((branch) => (
              <li>{branch}</li>
            ))}
          </ul>
        </Typography>
        <Typography sx={titles}>Fechas:</Typography>
        <Typography>
          <ul>
            {event.dates.map((date) => (
              <li>{date}</li>
            ))}
          </ul>
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "70%" } }}>
        <Typography sx={titles}>Descripción:</Typography>
        <Typography sx={{ padding: "8px" }}>{event.description}</Typography>
        <Typography sx={titles}>Requisitos:</Typography>
        <Typography>
          <ul>
            {event.requirements.map((req) => (
              <li>{req}</li>
            ))}
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default EventInfo;
