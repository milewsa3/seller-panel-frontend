import React from "react";
import { Paper } from "@mui/material";

const RankingOfOffersPaper = () => {
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
      Hello
    </Paper>
  );
};

export default RankingOfOffersPaper;
