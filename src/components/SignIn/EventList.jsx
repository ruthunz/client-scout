import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect } from "react";
import EventInfo from "../events/EventInfo";

import moment from "moment-with-locales-es6";
import eventService from "../../services/event.service";
import { Box, Typography, Button, TextField } from "@mui/material";

const searchKeys = ["title", "organizer"];

const EventList = ({ handlePickedEvent, handleDeleteEvent }) => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    eventService.getAllEvents().then((eventList) => {
      setEvents(eventList);
    });
  }, []);

  const searcher = (data) => {
    return data.filter((course) =>
      searchKeys.some((key) => course[key].toLowerCase().includes(search))
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "8px",
      }}
    >
      <TextField
        placeholder="Buscar por Nombre u Organizador..."
        onChange={(e) => setSearch(e.target.value)}
        autoComplete="off"
        size="small"
        sx={{ width: "100%", margin: "0 0 24px 0" }}
      />
      {events &&
        searcher(events).map((event) => (
          <Accordion square key={event.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={event.title}
              id={event.title}
              sx={{
                borderRadius: "0 !important",
                backgroundColor: "brand.brown",
                color: "brand.lightgrey",
              }}
            >
              <Typography sx={{ width: "40%", flexShrink: 0 }}>
                {event.title}
              </Typography>
              <Typography sx={{ color: "brand.lightgrey" }}>
                {moment(new Date(event.dates[0])).locale("es").format("ll")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Button
                sx={{
                  bgcolor: "brand.grey",
                  color: "brand.brown",
                  borderRadius: 0,
                  margin: "16px 8px 16px 8px",
                  "&:hover": {
                    backgroundColor: "brand.lightgrey",
                  },
                }}
                onClick={() => handlePickedEvent(event)}
              >
                editar
              </Button>
              <Button
                sx={{
                  bgcolor: "brand.grey",
                  color: "brand.brown",
                  borderRadius: 0,
                  margin: "16px 8px 16px 8px",
                  "&:hover": {
                    backgroundColor: "brand.lightgrey",
                  },
                }}
                onClick={() => handleDeleteEvent(event)}
              >
                eliminar
              </Button>
              <EventInfo event={event} />
            </AccordionDetails>
          </Accordion>
        ))}
    </Box>
  );
};

export default EventList;
