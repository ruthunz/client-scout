import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { eventdata } from "./eventsdata";
import moment from "moment";

const bookedStyle = { border: "2px solid #461622" };

const About = () => {
  const [selectedDay, setSelectedDay] = useState();
  const [currentEvents, setCurrentEvents] = useState([]);
  const [event, setEvent] = useState(null);

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
    setEvent(e);
  }, [selectedDay]);

  return (
    <Box mt={8}>
      <DayPicker
        mode="single"
        selected={selectedDay}
        onSelect={setSelectedDay}
        modifiers={{ booked: currentEvents }}
        modifiersStyles={{ booked: bookedStyle }}
      />
      {event && <p>{JSON.stringify(event)}</p>}
    </Box>
  );
};
export default About;
