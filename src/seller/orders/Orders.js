import React from "react";
import { useParams } from "react-router-dom";
import { Divider, IconButton, Paper, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import FilterSelect from "./FilterSelect";
import OrderPaper from "./OrderPaper";

const fetchedData = [
  {
    itemFullName: "Book J.K Rowling - “How to be successful?”",
    imgUrl: "/images/orders/notebook.png",
    price: 1540,
    currency: "zł",
    boughtBy: "Bartosz Zdybel",
    address: "ul. Fiołkowa 24A 05-456 Warszawa",
    telephone: "517307568",
    deliveryCompany: "InPost",
  },
  {
    itemFullName: "Book John Flanagan - “How to train your dog?”",
    imgUrl: "/images/orders/notebook.png",
    price: 1200,
    currency: "zł",
    boughtBy: "Bartosz Zdybel",
    address: "ul. Fiołkowa 24A 05-456 Warszawa",
    telephone: "517307568",
    deliveryCompany: "InPost",
  },
  {
    itemFullName: "Book Rick Riordan - “Olimpijscy Herosi?”",
    imgUrl: "/images/orders/notebook.png",
    price: 400,
    currency: "zł",
    boughtBy: "Bartosz Zdybel",
    address: "ul. Fiołkowa 24A 05-456 Warszawa",
    telephone: "517307568",
    deliveryCompany: "DPD",
  },
  {
    itemFullName: "Book John Flanagan - “How to train your dog?”",
    imgUrl: "/images/orders/notebook.png",
    price: 1200,
    currency: "zł",
    boughtBy: "Bartosz Zdybel",
    address: "ul. Fiołkowa 24A 05-456 Warszawa",
    telephone: "517307568",
    deliveryCompany: "InPost",
  },
  {
    itemFullName: "Book Rick Riordan - “Olimpijscy Herosi?”",
    imgUrl: "/images/orders/notebook.png",
    price: 400,
    currency: "zł",
    boughtBy: "Bartosz Zdybel",
    address: "ul. Fiołkowa 24A 05-456 Warszawa",
    telephone: "517307568",
    deliveryCompany: "DPD",
  },
];

const Orders = () => {
  const params = useParams();

  const possibleOrdersTypes = ["unpaid", "not-send", "returns"];

  if (
    !params.ordersType ||
    possibleOrdersTypes.indexOf(params.ordersType) < 0
  ) {
    return (
      <Typography
        marginTop={5}
        textAlign={"center"}
        variant={"h4"}
        color={"text.primary"}
      >
        Invalid orders type
      </Typography>
    );
  }

  return (
    <Box sx={{ m: 10 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
        <Typography variant={"h5"} color={"text.primary"}>
          Orders <span style={{ color: "grey" }}>{params.ordersType}</span>
        </Typography>
        <IconButton size={"small"} sx={{ ml: 2 }}>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
      <Divider />
      <Paper sx={{ mt: 3, p: 5, width: "auto" }}>
        <FilterSelect sx={{ mt: 3, mb: 6 }} />
        <Box display={"flex"} flexDirection={"column"} gap={7}>
          {fetchedData.map((order) => (
            <OrderPaper order={order} />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Orders;
