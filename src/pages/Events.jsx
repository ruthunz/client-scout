import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

import moment from "moment";
import { eventdata } from "./eventsdata";
const bookedStyle = { border: "2px solid #461622" };

const Events = () => {
  //ACCORDION
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //DAY PICKER
  const [selectedDay, setSelectedDay] = useState();
  const [currentEvents, setCurrentEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({});

  useEffect(() => {
    eventdata.forEach((event) => {
      const dates = event.dates.map((date) => new Date(date));
      setCurrentEvents((currentEvents) => [...currentEvents, ...dates]);
    });
  }, [eventdata]);

  useEffect(() => {
    const e = eventdata.filter((event) =>
      event.dates.includes(moment(selectedDay).format("YYYY/MM/DD"))
    );
    setSelectedEvent(e);

    console.log(JSON.stringify(e));
  }, [selectedDay]);

  return (
    <Box
      mt={16}
      sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "100%", md: "70%", lg: "70%" },
          paddingLeft: { xs: "8px", sm: "8px", md: "10%", lg: "10%" },
          paddingRight: { xs: "8px", sm: "8px", md: "10%", lg: "10%" },
        }}
      >
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h5", md: "h3", lg: "h3" },
            color: "black",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          PROXIMOS EVENTOS
        </Typography>
        {eventdata.map((event) => (
          <Accordion
            key={event.title}
            expanded={expanded === event.title}
            onChange={handleChange(event.title)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {event.title}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {event.subtitle}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{event.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
        }}
      >
        <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
          modifiers={{ booked: currentEvents }}
          modifiersStyles={{ booked: bookedStyle }}
        />
        <p>{JSON.stringify(selectedEvent)}</p>
      </Box>
    </Box>
  );
};

export default Events;
