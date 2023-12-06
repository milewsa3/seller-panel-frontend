import React from "react";
import { Box, Button } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import Notificator from "./Notificator";
import AccountSwitcher from "./AccountSwitcher";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../util/user/userUtils";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

const NavbarDesktop = ({ user, ...props }) => {
  const theme = useTheme();

  const styles = {
    root: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(3),
    },
  };
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      <ThemeSwitcher />
      <LanguageSwitcher />
      <Notificator />
      {user && (
        <>
          <AccountSwitcher />
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => logout(navigate)}
            sx={{ mr: 3, ml: 5 }}
          >
            {t("logout")}
          </Button>
        </>
      )}
    </Box>
  );
};

export default NavbarDesktop;
