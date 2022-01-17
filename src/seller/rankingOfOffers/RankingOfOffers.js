import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { Divider, Typography } from "@mui/material";
import RankingOfOffersGrid from "./RankingOfOffersGrid";

const RankingOfOffers = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ mx: 10, my: 5 }}>
      <Typography variant={"h5"} color={"text.primary"} sx={{ my: 7 }}>
        {t("ranking-of-offers")}
      </Typography>
      <Divider />
      <RankingOfOffersGrid />
    </Box>
  );
};

export default RankingOfOffers;
