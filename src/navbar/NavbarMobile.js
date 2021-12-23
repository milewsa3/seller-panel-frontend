import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import HomeIcon from "@mui/icons-material/Home";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import InfoIcon from "@mui/icons-material/Info";
import { makeStyles } from "@mui/styles";
import { deepPurple } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  topNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.6rem 4rem",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& *": {
      textDecoration: "none",
      color: "white",
      fontSize: "1.2rem",
      transition: "all 0.2s",
      marginLeft: "15px",
      marginRight: "15px",
    },
  },
  clearLink: {
    textDecoration: "none",
    color: "white",
    marginLeft: "10px",
  },
  active: {
    color: "gray",
  },
  list: {
    width: 220,
  },
  mobileItem: {
    textDecoration: "none",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  purple: {
    // color: theme.palette.getContrastText(deepPurple[500]),
    color: "white",
    backgroundColor: deepPurple[500],
  },
}));

const NavbarMobile = ({ user, logout, ...props }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setMenuOpened(true);
  };

  const handleDrawerClose = () => {
    setMenuOpened(false);
  };

  const tabsForNotLoggedInUsers = [];

  const tabsForLoggedInUsers = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <HomeIcon />,
    },
    {
      title: "Films",
      path: "/films",
      icon: <MovieFilterIcon />,
    },
    {
      title: "About",
      path: "/about",
      icon: <InfoIcon />,
    },
  ];

  const mobileMenu = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => handleDrawerClose()}
    >
      <List>
        {user ? (
          <>
            {tabsForLoggedInUsers.map((tab, index) => (
              <ListItem button key={tab.title}>
                <NavLink
                  exact
                  to={tab.path}
                  activeClassName={classes.active}
                  className={classes.mobileItem}
                >
                  <ListItemIcon>{tab.icon}</ListItemIcon>
                  <ListItemText primary={tab.title} />
                </NavLink>
              </ListItem>
            ))}
            <ListItem button key={"logout"}>
              <div className={classes.mobileItem} onClick={logout}>
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </div>
            </ListItem>
          </>
        ) : (
          <>
            {tabsForNotLoggedInUsers.map((tab, index) => (
              <ListItem button key={tab.title}>
                <NavLink
                  exact
                  to={tab.path}
                  activeClassName={classes.active}
                  className={classes.mobileItem}
                >
                  <ListItemIcon>{tab.icon}</ListItemIcon>
                  <ListItemText primary={tab.title} />
                </NavLink>
              </ListItem>
            ))}
          </>
        )}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => handleDrawerOpen()}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={menuOpened}
        onClose={() => handleDrawerClose()}
      >
        {mobileMenu()}
      </Drawer>
    </div>
  );
};

export default NavbarMobile;
