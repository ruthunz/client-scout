import React from "react";
import { useThemeContext } from "./theme/ThemeContextProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
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
            <Route
              index
              element={
                <React.Suspense fallback="Loading...">
                  <LazyHome />
                </React.Suspense>
              }
            />
            <Route
              path="/"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyHome />
                </React.Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyAbout />
                </React.Suspense>
              }
            >
              <Route
                index
                element={
                  <React.Suspense fallback="Loading...">
                    <LazyBrownsea />
                  </React.Suspense>
                }
              />
              <Route
                path="brownsea"
                element={
                  <React.Suspense fallback="Loading...">
                    <LazyBrownsea />
                  </React.Suspense>
                }
              />
              <Route
                path="fundaments"
                element={
                  <React.Suspense fallback="Loading...">
                    <LazyFundaments />
                  </React.Suspense>
                }
              />
              <Route
                path="definition"
                element={
                  <React.Suspense fallback="Loading...">
                    <LazyDefinition />
                  </React.Suspense>
                }
              />
              <Route
                path="purpose"
                element={
                  <React.Suspense fallback="Loading...">
                    <LazyPurpose />
                  </React.Suspense>
                }
              />
              <Route
                path="mision"
                element={
                  <React.Suspense fallback="Loading...">
                    <LazyMision />
                  </React.Suspense>
                }
              />
            </Route>
            <Route
              path="/contact"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyContact />
                </React.Suspense>
              }
            />
            <Route
              path="/events"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyEvents />
                </React.Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <React.Suspense fallback="Loading...">
                  <LazySignIn />
                </React.Suspense>
              }
            />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
