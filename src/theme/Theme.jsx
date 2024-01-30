import { amber } from "@mui/material/colors";

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: "Lato",
    h1: {
      fontWeight: 700,
    },
  },
  components: {
    MuiToolbarRoot: {
      styleOverrides: {
        dense: {
          height: 80,
          minHeight: 80,
        },
      },
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            primary: "#401520",
            secondary: "#632599",
          },
          brand: {
            brown: "#401520",
            lightbrown: "#59191E",
            pinkbrown: "#784951",
            grey: "#A9A4A8",
            lightgrey: "#E9EAE5",
          },
          text: {
            title: "#151922",
            body: "#20252e",
          },
          button: {
            active: "#621b1f",
          },
          primary: {
            main: "#401520",
            dark: "#000000",
            light: "#2b859e",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#556cd6",
            dark: "#000000",
            light: "#2b859e",
          },
        }),
  },
});

export default theme;
