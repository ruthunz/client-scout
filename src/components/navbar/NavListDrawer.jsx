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

const NavListDrawer = ({ navLinks, setOpenDrawer }) => {
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
              }}
            >
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpenDrawer(false)}
                sx={{
                  "&.active": {
                    backgroundColor: "brand.pinkbrown",
                  },
                }}
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
