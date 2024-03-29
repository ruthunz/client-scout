import { Box, Typography, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import EventInfo from "../components/events/EventInfo";
import { useEffect } from "react";

import eventService from "../services/event.service";
import moment from "moment-with-locales-es6";

import { es } from "date-fns/locale";

const bookedStyle = { backgroundColor: "#461622", color: "white" };
const searchKeys = ["title", "organizer"];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [month, setMonth] = useState();
  const [search, setSearch] = useState("");

  const setDateOnCalendar = (dates) => {
    const data = dates.map((date) => new Date(date));
    setCurrentEvents([...data]);
    setMonth(data[0]);
  };

  useEffect(() => {
    eventService.getUpcomingEvents().then((eventList) => {
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
        backgroundColor: "brand.lightgrey",
        display: "flex",
        justifyContent: "center",
        height: "92%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 0 16px",
          height: "100%",
          width: { xs: "100%", sm: "100%", md: "72%", lg: "72%" },
          overflowY: "auto",
        }}
      >
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h5", md: "h3", lg: "h3" },
            color: "brand.brown",
            marginBottom: "16px",
            width: "100%",
          }}
        >
          PROXIMOS EVENTOS
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: "16px",
          }}
        >
          {events.length > 0 && (
            <TextField
              placeholder="Buscar Nombre u Organizador..."
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
              size="small"
              sx={{ width: "100%" }}
            />
          )}
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "64%", lg: "64%" },
              margin: "8px",
            }}
          >
            {events.length > 0 ? (
              searcher(events).map((event) => (
                <Accordion
                  square
                  key={event.title}
                  onChange={() => setDateOnCalendar([...event.dates])}
                >
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
                      {moment(new Date(event.dates[0]))
                        .locale("es")
                        .format("ll")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <EventInfo event={event} />
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <Typography>
                Por el momento no hay eventos para mostrar
              </Typography>
            )}
          </Box>

          <Paper
            square
            elevation={3}
            sx={{
              backgroundColor: "brand.lightgrey",
              width: { xs: "100%", sm: "100%", md: "32%", lg: "32%" },
              minHeight: "330px",
              minWidth: "280px",
              padding: "8px 16px 8px 16px",
              margin: "8px",
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "fixed",
                overflow: "auto",
              }}
            >
              <DayPicker
                mode="single"
                modifiers={{ booked: currentEvents }}
                modifiersStyles={{ booked: bookedStyle }}
                month={month}
                locale={es}
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
