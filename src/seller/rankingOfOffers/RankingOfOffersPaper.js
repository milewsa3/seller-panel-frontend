import React from "react";
import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTranslation } from "react-i18next";

const RankingOfOffersPaper = ({ rankingOffer, ...props }) => {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={4}
      sx={{
        px: 5,
        py: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        alignItems: "center",
      }}
    >
      <Box
        component={"img"}
        src={rankingOffer.imgUrl}
        alt={""}
        width={"120px"}
        height={"120px"}
        sx={{
          objectFit: "cover",
          borderRadius: "50%",
          m: 2,
          mr: 4,
          borderStyle: "solid",
          borderColor: "secondary.main",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Typography>{rankingOffer.fullItemName}</Typography>
        <Typography>
          {t("ranking-of-offers-bought-by")}{" "}
          <b>{rankingOffer.numberOfUnitsSold}</b>{" "}
          {t("ranking-of-offers-people-for")}{" "}
          <b>
            {rankingOffer.profit} {rankingOffer.currency}
          </b>
        </Typography>
        <Paper
          sx={{
            mt: 8,
            p: 1,
            width: "80px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <VisibilityIcon fontSize={"small"} />
          <Typography variant={"subtitle2"}>
            {rankingOffer.numberOfUniqueViews}
          </Typography>
        </Paper>
      </Box>
    </Paper>
  );
};

export default RankingOfOffersPaper;
