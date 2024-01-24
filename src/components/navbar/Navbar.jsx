import React, { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navbar = ({ navLinks }) => {
  const [OpenDrawer, setOpenDrawer] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
            }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={OpenDrawer}
        anchor="left"
        onClose={() => setOpenDrawer(false)}
        sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </Box>
  );
};

export default Navbar;
