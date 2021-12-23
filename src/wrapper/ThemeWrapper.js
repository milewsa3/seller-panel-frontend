import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ColorModeContext from "../context/ColorModeContext";
import { blue, pink } from "@mui/material/colors";
import { useMediaQuery } from "@mui/material";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: blue,
          secondary: pink,
        }
      : {
          primary: blue,
          secondary: pink,
        }),
  },
  spacing: 3,
});

const ThemeWrapper = (props) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        console.log(document.body.style.backgroundColor);
        if (document.body.style.backgroundColor === "rgb(18, 18, 18)") {
          document.body.style.backgroundColor = "rgb(255, 255, 255)";
        } else {
          document.body.style.backgroundColor = "rgb(18, 18, 18)";
        }
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeWrapper;
