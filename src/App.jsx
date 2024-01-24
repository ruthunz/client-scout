import { useThemeContext } from "./theme/ThemeContextProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, ThemeProvider } from "@mui/material";
import LandingPage from "./LandingPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Navbar from "./components/navbar/Navbar";

const navLinks = [
  { title: "home", path: "/" },
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

function App() {
  const { theme, mode } = useThemeContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "back.main",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Navbar navLinks={navLinks} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
