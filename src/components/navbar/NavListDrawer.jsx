import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { drawerStyle } from "./styles";
import { NavLink, useNavigate } from "react-router-dom";
import sessionService from "../../services/session.service";

const NavListDrawer = ({ navLinks, setOpenDrawer }) => {
  const navigate = useNavigate();

  const handleOpenAdmin = () => {
    if (sessionService.isLogged()) {
      navigate("/admin");
    } else {
      navigate("/login");
    }
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
          <ListItem
            key={"user"}
            disablePadding
            divider
            sx={{
              color: "white",
            }}
          >
            <ListItemButton
              onClick={() => handleOpenAdmin()}
              sx={{
                "&.active": {
                  backgroundColor: "brand.pinkbrown",
                },
              }}
            >
              <AccountCircleIcon fontSize="large" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
