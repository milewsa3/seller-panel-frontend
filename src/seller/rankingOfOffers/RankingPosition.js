import React from "react";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";

const RankingPosition = ({
  position,
  itemFullName,
  numberOfSales,
  profit,
  currency,
  ...props
}) => {
  const styles = {
    root: {
      display: "flex",
      alignItems: "center",
      mx: "auto",
      my: 4,
      width: "90%",
    },
    positionLabel: {
      mr: 5,
    },
    itemContainer: {
      display: "flex",
      flexDirection: "column",
      p: 2,
      gap: 1,
      width: "100%",
    },
  };

  return (
    <Box sx={styles.root}>
      <Typography sx={styles.positionLabel} variant={"h4"}>
        {position}.
      </Typography>
      <Paper elevation={2} sx={styles.itemContainer}>
        <Typography>{itemFullName}</Typography>
        <Typography variant={"subtitle2"}>
          bought by <b>{numberOfSales}</b> people for{" "}
          <b>
            {profit} {currency}
          </b>
        </Typography>
      </Paper>
    </Box>
  );
};

export default RankingPosition;
