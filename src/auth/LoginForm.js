import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import AuthInput from "./AuthInput";
import { defaultUser } from "../util/user/userUtils";
import { useTranslation } from "react-i18next";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { error } = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(defaultUser));
    navigate("/");
  };

  const styles = {
    root: {
      width: 400,
      p: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    topLabel: {
      mb: 12,
    },
    submitButton: {
      mt: 8,
      mb: 15,
    },
    signUpArea: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    divider: {
      width: 1,
      mb: 3,
    },
    switchButton: {
      color: "text.secondary",
    },
  };

  return (
    <Paper elevation={3} sx={styles.root}>
      <Typography variant="h5" sx={styles.topLabel}>
        {isSignup ? t("login-form-sign-up") : t("login-form-sign-in")}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} maxWidth={"380px"}>
          {isSignup && (
            <>
              <AuthInput
                name="firstName"
                label={t("login-form-first-name")}
                handleChange={handleChange}
                autoFocus
                half
                error={Boolean(error?.firstName)}
                helperText={error?.firstName}
              />
              <AuthInput
                name="lastName"
                label={t("login-form-last-name")}
                handleChange={handleChange}
                half
                error={Boolean(error?.lastName)}
                helperText={error?.lastName}
              />
            </>
          )}
          <AuthInput
            name="email"
            label={t("login-form-email")}
            handleChange={handleChange}
            type="email"
            error={Boolean(error?.email)}
            helperText={error?.email}
          />
          <AuthInput
            name="password"
            label={t("login-form-password")}
            handleChange={handleChange}
            error={Boolean(error?.password)}
            helperText={error?.password}
            type={showPassword ? "text" : "password"}
            handleShowPassword={handleShowPassword}
          />
          {isSignup && (
            <AuthInput
              name="confirmPassword"
              label={t("login-form-repeat-password")}
              handleChange={handleChange}
              error={Boolean(error?.confirmPassword)}
              helperText={error?.confirmPassword}
              type="password"
            />
          )}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={styles.submitButton}
        >
          {isSignup ? t("login-form-sign-up") : t("login-form-sign-in")}
        </Button>
        <Box sx={styles.signUpArea}>
          <Divider sx={styles.divider} />
          <Button onClick={switchMode} sx={styles.switchButton}>
            {isSignup
              ? t("login-form-go-to-sign-in")
              : t("login-form-go-to-sign-up")}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default LoginForm;
