import React from "react";
import { Box, Button } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import Notificator from "./Notificator";
import AccountSwitcher from "./AccountSwitcher";

const NavbarDesktop = ({ user, logout, ...props }) => {
  const styles = {
    root: {
      display: "flex",
      alignItems: "center",
    },
  };

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
            onClick={logout}
          >
            Logout
          </Button>
        </>
      )}
    </Box>
  );
};

export default NavbarDesktop;
