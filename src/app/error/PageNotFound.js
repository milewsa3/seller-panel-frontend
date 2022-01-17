import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <Box textAlign={"center"}>
      <Typography sx={{ mt: 8 }} color={"text.primary"} variant={"h2"}>
        {t("error-page-not-found")}
      </Typography>
    </Box>
  );
};

export default PageNotFound;
