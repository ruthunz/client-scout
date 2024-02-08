import { useThemeContext } from "./theme/ThemeContextProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Events from "./pages/Events";
import Brownsea from "./components/about/Brownsea";
import Fundaments from "./components/about/Fundaments";
import Mision from "./components/about/Mision";
import Definition from "./components/about/Definition";
import Purpose from "./components/about/Purpose";
import SignIn from "./pages/SignIn";
import sessionService from "./services/session.service";

const navLinks = [
  { title: "Inicio", path: "/" },
  { title: "Quienes Somos", path: "/about" },
  { title: "Contactanos", path: "/contact" },
  { title: "Eventos", path: "/events" },
  { title: sessionService.isLogged() ? "Admin" : "Ingresar", path: "/login" },
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
            overflowY: "hidden",
          }}
        >
          <Navbar navLinks={navLinks} />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route index element={<Brownsea />} />
              <Route path="brownsea" element={<Brownsea />} />
              <Route path="fundaments" element={<Fundaments />} />
              <Route path="definition" element={<Definition />} />
              <Route path="purpose" element={<Purpose />} />
              <Route path="mision" element={<Mision />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
