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
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            primary: "#461622",
            secondary: "#632599",
          },
          button: {
            active: "#621b1f",
          },
          primary: {
            main: "#461622",
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
