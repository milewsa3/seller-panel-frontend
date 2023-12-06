import React from "react";
import Box from "@mui/material/Box";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Divider, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrdersDetail = ({ type, number, numberColor, linkTo, ...props }) => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      p: 2,
    },
  };

  return (
    <Box sx={styles.container}>
      <IconButton
        size={"small"}
        sx={{ alignSelf: "flex-end" }}
        onClick={() => navigate(linkTo)}
      >
        <IosShareIcon fontSize={"small"} />
      </IconButton>
      <Typography sx={{ mt: -8 }} variant={"h6"}>
        {type}
      </Typography>
      <Typography sx={{ mb: 4 }} variant={"h4"} color={numberColor}>
        {number}
      </Typography>
      <Divider flexItem={true} />
    </Box>
  );
};

export default OrdersDetail;
