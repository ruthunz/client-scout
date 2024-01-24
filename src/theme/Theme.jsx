import { amber } from "@mui/material/colors";

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          back: {
            main: "white",
            main2: "#311573",
          },
          primary: {
            main: "#556cd6",
            dark: "#000000",
            light: "#2b859e",
          },
          borderCard: {
            main: "#ffffff",
          },
          backgroundColor: {
            default: "#311573",
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
