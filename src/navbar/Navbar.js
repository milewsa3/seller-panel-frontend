import { AppBar, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { clearUser, getUser, isUserLoggedIn } from "../user/userUtils";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  topNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.6rem 4rem",
  },
  clearLink: {
    textDecoration: "none",
    color: "white",
    marginLeft: "10px",
  },
}));

export default function Navbar() {
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  const [user, setUser] = useState();
  const isMobileMenu = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (isUserLoggedIn()) {
      setUser(getUser());
    } else {
      setUser(undefined);
    }
  }, [navigate]);

  const logout = () => {
    clearUser();
    navigate("/login");
  };

  return (
    <AppBar color={"primary"} position={"sticky"}>
      <Toolbar className={classes.topNav}>
        <Typography variant="h4">
          <NavLink exact to="/" className={classes.clearLink}>
            {t("navbar-title")} <ShoppingCartIcon fontSize={"medium"} />
          </NavLink>
        </Typography>
        {isMobileMenu ? (
          <NavbarMobile user={user} logout={logout} />
        ) : (
          <NavbarDesktop user={user} logout={logout} />
        )}
      </Toolbar>
    </AppBar>
  );
}
