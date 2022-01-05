import React, { useEffect } from "react";
import LoginForm from "../component/LoginForm";
import { Box, useMediaQuery } from "@mui/material";
import LoginAd from "../component/LoginAd";
import { useTheme } from "@emotion/react";
import { clearUser } from "../util/user/userUtils";

const Login = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    clearUser();
  }, []);

  const styles = {
    root: {
      mx: "auto",
      my: theme.spacing(14),
      width: 4 / 5,
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.up("md")]: {
        justifyContent: "space-between",
      },
    },
  };

  return (
    <Box sx={styles.root}>
      {matchesDesktop && <LoginAd />}
      <LoginForm />
    </Box>
  );
};

export default Login;
