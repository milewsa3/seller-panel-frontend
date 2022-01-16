import React from "react";
import { Paper, Typography } from "@mui/material";

const NoProductAvailable = () => {
  return (
    <Paper sx={{ mt: 3, py: 40, width: "auto", textAlign: "center" }}>
      <Typography variant={"h5"} color={"text.secondary"}>
        No product available
      </Typography>
    </Paper>
  );
};

export default NoProductAvailable;
