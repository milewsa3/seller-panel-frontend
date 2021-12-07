import {Typography} from "@mui/material";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './component/LanguageSelector';
import ThemeSwitcher from './component/ThemeSwitcher';
import Counter from './component/Counter';

function App() {

  const { t } = useTranslation();

  return (
    <div className="App">
      <Typography variant={"h1"}>{t("title")}</Typography>
      <Typography variant={"body"}>{t("placeholder")}</Typography>
      <LanguageSelector/>
      <ThemeSwitcher />
      <Counter />
    </div>
  );
}

export default App;
