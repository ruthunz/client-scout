import React, { Suspense } from "react";
import { useThemeContext } from "./theme/ThemeContextProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, ThemeProvider } from "@mui/material";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import sessionService from "./services/session.service";

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyAbout = React.lazy(() => import("./pages/About"));
const LazyBrownsea = React.lazy(() => import("./components/about/Brownsea"));
const LazyFundaments = React.lazy(() =>
  import("./components/about/Fundaments")
);
const LazyDefinition = React.lazy(() =>
  import("./components/about/Definition")
);
const LazyPurpose = React.lazy(() => import("./components/about/Purpose"));
const LazyMision = React.lazy(() => import("./components/about/Mision"));
const LazyContact = React.lazy(() => import("./pages/Contact"));
const LazyEvents = React.lazy(() => import("./pages/Events"));
const LazySignIn = React.lazy(() => import("./pages/SignIn"));

const navLinks = [
  { title: "Inicio", path: "/" },
  { title: "Quienes Somos", path: "/about/brownsea" },
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
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<LazyHome />} />
              <Route path="/about" element={<LazyAbout />}>
                <Route path="brownsea" element={<LazyBrownsea />} />
                <Route path="fundaments" element={<LazyFundaments />} />
                <Route path="definition" element={<LazyDefinition />} />
                <Route path="purpose" element={<LazyPurpose />} />
                <Route path="mision" element={<LazyMision />} />
              </Route>
              <Route path="/contact" element={<LazyContact />} />
              <Route path="/events" element={<LazyEvents />} />
              <Route path="/login" element={<LazySignIn />} />
            </Route>
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}

function Layout() {
  return (
    <>
      <Navbar navLinks={navLinks} />
      <Suspense fallback="Cargando...">
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
