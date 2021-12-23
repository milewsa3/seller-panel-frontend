import React from "react";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useTranslation } from "react-i18next";

const CheckedLabel = ({ children, ...props }) => {
  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
        color: "text.primary",
      }}
    >
      <CheckIcon sx={{ mr: 5 }} fontSize={"small"} />
      {children}
    </Typography>
  );
};

const LoginAd = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ mt: 15, mb: 10, fontWeight: "bold", color: "text.primary" }}
      >
        {t("login-ad-title")}
      </Typography>
      <CheckedLabel>{t("login-ad-body-1")}</CheckedLabel>
      <CheckedLabel>{t("login-ad-body-2")}</CheckedLabel>
      <CheckedLabel>{t("login-ad-body-3")}</CheckedLabel>
    </Box>
  );
};

export default LoginAd;
