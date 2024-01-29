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
      <AppBar
        sx={{
          height: "80px",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brownsea
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
                sx={{
                  fontSize: "16px",
                  borderRadius: 0,
                  "&.active": {
                    backgroundColor: "brand.pinkbrown",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{
              display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
            }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        open={OpenDrawer}
        anchor="left"
        onClose={() => setOpenDrawer(false)}
        sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} setOpenDrawer={setOpenDrawer} />
      </Drawer>
    </Box>
  );
};

export default Navbar;
