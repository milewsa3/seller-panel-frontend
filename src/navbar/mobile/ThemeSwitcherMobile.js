import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@emotion/react";
import ColorModeContext from "../../context/ColorModeContext";
import { useTranslation } from "react-i18next";

const ThemeSwitcherMobile = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const { t } = useTranslation();

  return (
    <ListItemButton divider={true} onClick={colorMode.toggleColorMode}>
      <ListItemIcon>
        {theme.palette.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </ListItemIcon>
      <ListItemText primary={t("theme-switcher")} />
    </ListItemButton>
  );
};

export default ThemeSwitcherMobile;
