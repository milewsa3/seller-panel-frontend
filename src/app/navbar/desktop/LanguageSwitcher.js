import React from "react";
import { useTranslation } from "react-i18next";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { availableLanguages } from "../../../util/language/LanguageUtils";

const LanguageSwitcher = ({ ...props }) => {
  const { i18n } = useTranslation();

  return (
    <Box {...props}>
      {availableLanguages.map(
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
