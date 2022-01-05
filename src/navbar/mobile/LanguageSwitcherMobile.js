import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { availableLanguages } from "../../util/language/LanguageUtils";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

const LanguageSwitcherMobile = ({ ...props }) => {
  const { t, i18n } = useTranslation();

  return (
    <Box {...props}>
      {availableLanguages.map(
        (lang) =>
          i18n.language !== lang.name && (
            <ListItemButton
              divider={true}
              onClick={() => i18n.changeLanguage(lang.name)}
            >
              <ListItemIcon>
                <img
                  width={"30px"}
                  height={"18px"}
                  src={lang.flagUrl}
                  alt={""}
                />
              </ListItemIcon>
              <ListItemText primary={t(lang.name)} />
            </ListItemButton>
          )
      )}
    </Box>
  );
};

export default LanguageSwitcherMobile;
