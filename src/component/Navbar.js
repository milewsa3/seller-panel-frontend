import {
  AppBar,
  Avatar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import InfoIcon from "@mui/icons-material/Info";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useTheme } from "@emotion/react";
import { deepPurple } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  topNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.0rem 4rem",
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

const defaultUser = {
  result: {
    userName: "amilewski",
    name: "Adrian",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  },
};

export default function Navbar() {
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();

  const [user, setUser] = useState();
  const isMobileMenu = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {}, []);

  const logout = () => {
    navigate("/");
  };

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
    <AppBar color={"primary"} position={"sticky"}>
      <Toolbar className={classes.topNav}>
        <Typography variant="h3" component="h4">
          <NavLink exact to="/" className={classes.clearLink}>
            Seller's panel <ShoppingCartIcon fontSize={"large"} />
          </NavLink>
        </Typography>

        {isMobileMenu ? (
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
        ) : (
          <div className={classes.links}>
            {user ? (
              <>
                {tabsForLoggedInUsers.map((tab) => (
                  <NavLink
                    exact
                    to={tab.path}
                    activeClassName={classes.active}
                    key={tab.title}
                  >
                    {tab.title}
                  </NavLink>
                ))}
                <Avatar
                  className={classes.purple}
                  alt={user.result.name}
                  src={user.result.imageUrl}
                >
                  {user.result.name.charAt(0)}
                </Avatar>
                <Typography variant="h6" className={classes.userName}>
                  {user.result.name}
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={logout}
                  className={classes.logoutBtn}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                {tabsForNotLoggedInUsers.map((tab) => (
                  <NavLink
                    exact
                    to={tab.path}
                    activeClassName={classes.active}
                    key={tab.title}
                  >
                    {tab.title}
                  </NavLink>
                ))}
                <img
                  width={"30px"}
                  height={"auto"}
                  src={
                    "https://cdn.countryflags.com/thumbs/poland/flag-400.png"
                  }
                  alt={""}
                />
              </>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
