import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { NavLink } from "react-router-dom";

const Sidebar = ({ navLinks }) => {
  return (
    <nav>
      <List>
        {navLinks.map((item) => (
          <ListItem
            key={item.title}
            disablePadding
            divider
            sx={{
              color: "white",
            }}
          >
            <ListItemButton
              component={NavLink}
              to={item.path}
              onClick={() => setOpenDrawer(false)}
              sx={{
                "&.active": {
                  backgroundColor: "brand.grey",
                  color: "brand.brown",
                },
              }}
            >
              <ListItemText
                primary={item.title}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  paddingRight: "8%",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default Sidebar;
