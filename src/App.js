import {Typography} from "@mui/material";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './component/LanguageSelector';

function App() {

  const { t } = useTranslation();

  return (
    <div className="App">
      <Typography variant={"h1"}>{t("title")}</Typography>
      <Typography variant={"body"}>{t("placeholder")}</Typography>
      <LanguageSelector/>
    </div>
  );
}

export default App;
