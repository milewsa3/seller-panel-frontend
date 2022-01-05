import React from "react";
import ThemeSwitcherMobile from "./ThemeSwitcherMobile";
import LanguageSwitcherMobile from "./LanguageSwitcherMobile";
import AccountSwitcherMobile from "./AccountSwitcherMobile";
import LogoutMobile from "./LogoutMobile";
import { Box } from '@mui/material';


const SideNavbarMobile = ({ user, handleDrawerClose, ...props }) => {
  return (
    <Box
      sx={{width: '200px'}}
      role="presentation"
      onClick={handleDrawerClose}
    >
      <ThemeSwitcherMobile />
      <LanguageSwitcherMobile />
      {user && (
        <>
          <AccountSwitcherMobile />
          <LogoutMobile />
        </>
      )}
    </Box>
  );
};

export default SideNavbarMobile;
