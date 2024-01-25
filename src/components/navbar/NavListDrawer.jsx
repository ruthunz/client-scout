import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { drawerStyle } from "./styles";
import { NavLink } from "react-router-dom";

const NavListDrawer = ({ navLinks, setOpenDrawer, selected, setSelected }) => {
  const selectOption = (item) => {
    setSelected(item.title);
    setOpenDrawer(false);
  };

  return (
    <Box sx={drawerStyle}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem
              key={item.title}
              disablePadding
              divider
              sx={{
                color: "white",
                backgroundColor:
                  selected === item.title ? "button.active" : "inherit",
              }}
            >
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => selectOption(item)}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
