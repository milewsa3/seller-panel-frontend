import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="LanguageSelector">
      <Button variant={"outlined"} onClick={() => changeLanguage("en")}>en</Button>
      <Button variant={"outlined"} onClick={() => changeLanguage("pl")}>pl</Button>
    </div>
  );
};

export default LanguageSelector;