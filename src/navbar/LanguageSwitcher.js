import React from "react";
import { useTranslation } from "react-i18next";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const LanguageSwitcher = ({ ...props }) => {
  const { i18n } = useTranslation();

  const languages = [
    {
      name: "en",
      flagUrl: "/images/flags/united-kingdom-flag-icon-32.png",
    },
    {
      name: "pl",
      flagUrl: "/images/flags/poland-flag-icon-32.png",
    },
  ];

  return (
    <Box {...props}>
      {languages.map(
        (lang) =>
          i18n.language !== lang.name && (
            <IconButton
              color="inherit"
              onClick={() => i18n.changeLanguage(lang.name)}
            >
              <img width={"30px"} height={"18px"} src={lang.flagUrl} alt={""} />
            </IconButton>
          )
      )}
    </Box>
  );
};

export default LanguageSwitcher;
