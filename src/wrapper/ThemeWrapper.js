import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ColorModeContext from "../context/ColorModeContext";
import { blue, pink } from "@mui/material/colors";

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
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
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
