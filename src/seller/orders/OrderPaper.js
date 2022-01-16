import React from "react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

const OrderPaper = ({ order, ...props }) => {
  const matchesMdSize = useMediaQuery((theme) => theme.breakpoints.up("md"));
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
        src={order.imgUrl}
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
        <Typography variant={"subtitle2"}>
          {order.itemFullName} {order.price} {order.currency}
        </Typography>
        <Typography variant={"h6"}>
          {t("orders-bought-by")}: <b>{order.boughtBy}</b>
        </Typography>
        <Typography variant={"subtitle2"}>
          {t("orders-address")}: <b>{order.address}</b>
        </Typography>
        <Typography variant={"subtitle2"}>
          {t("orders-telephone")}. <b>{order.telephone}</b>
        </Typography>
        {!matchesMdSize && (
          <Typography variant={"subtitle2"}>
            {t("orders-delivery-company")}: <b>{order.deliveryCompany}</b>
          </Typography>
        )}
      </Box>
      {matchesMdSize && (
        <Box
          component={"img"}
          sx={{ ml: { xs: "0", md: "auto" }, objectFit: "cover" }}
          src={
            "/images/deliveryCompany/logo/" +
            order.deliveryCompany.toLowerCase() +
            "-logo.png"
          }
          alt={""}
          width={"100px"}
          height={"100px"}
        />
      )}
    </Paper>
  );
};

export default OrderPaper;
