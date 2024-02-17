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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink, useNavigate } from "react-router-dom";
import sessionService from "../../services/session.service";

const Navbar = ({ navLinks }) => {
  const [OpenDrawer, setOpenDrawer] = useState(false);
  const navitage = useNavigate();
  const handleOpenAdmin = () => {
    if (sessionService.isLogged()) {
      navitage("/admin");
    } else {
      navitage("/login");
    }
  };

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
          <Box
            component={NavLink}
            to={"/"}
            sx={{ width: "70px", height: "70px", margin: "0 8px 0 8px" }}
          >
            <img src="/brownseaScoutLogo.png" width="100%"></img>
          </Box>
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
            <Button
              color="inherit"
              key={"user"}
              sx={{
                fontSize: "16px",
                borderRadius: 0,
                "&.active": {
                  backgroundColor: "brand.pinkbrown",
                },
              }}
              onClick={() => handleOpenAdmin()}
            >
              <AccountCircleIcon fontSize="large" />
            </Button>
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
