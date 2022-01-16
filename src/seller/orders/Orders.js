import React from "react";
import { useParams } from "react-router-dom";
import { Divider, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FilterSelect from "./FilterSelect";
import OrderPaper from "./OrderPaper";
import OrdersHeader from "./OrdersHeader";
import { availableOrdersTypes } from "./OrdersUtil";

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

  if (
    !params.ordersType ||
    availableOrdersTypes.indexOf(params.ordersType) < 0
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
    <Box sx={{ mx: 10, my: 5 }}>
      <OrdersHeader ordersType={params.ordersType} />
      <Divider />
      {fetchedData.length > 0 ? (
        <Paper sx={{ mt: 3, p: 5, width: "auto" }}>
          <FilterSelect sx={{ mt: 3, mb: 6 }} />
          <Box display={"flex"} flexDirection={"column"} gap={7}>
            {fetchedData.map((order) => (
              <OrderPaper order={order} />
            ))}
          </Box>
        </Paper>
      ) : (
        <Paper sx={{ mt: 3, py: 40, width: "auto", textAlign: "center" }}>
          <Typography variant={"h5"} color={"text.secondary"}>
            No product available
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default Orders;
