import React from "react";
import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const NoProductAvailable = () => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ mt: 3, py: 40, width: "auto", textAlign: "center" }}>
      <Typography variant={"h5"} color={"text.secondary"}>
        {t("orders-no-product-available")}
      </Typography>
    </Paper>
  );
};

export default NoProductAvailable;
