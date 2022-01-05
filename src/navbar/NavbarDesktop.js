import React from "react";
import { Box, Button } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import Notificator from "./Notificator";
import AccountSwitcher from "./AccountSwitcher";
import { useNavigate } from "react-router-dom";
import { logout } from "../user/userUtils";
import { useTheme } from "@emotion/react";

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
            sx={{ mr: 3, ml: 8 }}
          >
            Logout
          </Button>
        </>
      )}
    </Box>
  );
};

export default NavbarDesktop;
