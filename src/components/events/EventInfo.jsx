import { Box, Typography } from "@mui/material";
import moment from "moment";

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
        <Typography sx={titles}>Organizador: </Typography>

        <ul>
          <li>{event.organizer}</li>
        </ul>

        <Typography sx={titles}>Ramas:</Typography>

        <ul>
          {event.branches.map((branch) => (
            <li key={branch}>{branch}</li>
          ))}
        </ul>

        <Typography sx={titles}>Fechas:</Typography>

        <ul>
          {event.dates.map((date) => (
            <li key={date}>{moment(date).format("L")}</li>
          ))}
        </ul>
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "70%" } }}>
        <Typography sx={titles}>Descripción:</Typography>
        <Typography sx={{ padding: "8px" }}>{event.description}</Typography>
        <Typography sx={titles}>Requisitos:</Typography>

        <ul>
          {event.requirements.map((req) => (
            <li key={req}>{req}</li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default EventInfo;
