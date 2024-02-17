import React from "react";
import EventManager from "../components/SignIn/EventManager";
import { Box } from "@mui/material";

const EventsAdministration = () => {
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
          backgroundColor: "brand.brown",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "16px 16px 0 16px",
          height: "100%",
          width: { xs: "100%", sm: "100%", md: "72%", lg: "72%" },
          overflowY: "auto",
        }}
      >
        <EventManager />
      </Box>
    </Box>
  );
};

export default EventsAdministration;
