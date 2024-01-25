import { useThemeContext } from "./theme/ThemeContextProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Events from "./pages/Events";

const navLinks = [
  { title: "Inicio", path: "/" },
  { title: "Quienes Somos", path: "/about" },
  { title: "Contactanos", path: "/contact" },
  { title: "Eventos", path: "/events" },
];

function App() {
  const { theme, mode } = useThemeContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            overflowX: "hidden",
          }}
        >
          <Navbar navLinks={navLinks} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
/*
 */
