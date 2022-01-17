import React from "react";
import WidgetLayout from "../WidgetLayout";
import { useTranslation } from "react-i18next";
import RankingPosition from "./RankingPosition";
import Box from "@mui/material/Box";

const RankingOfOffersWidget = () => {
  const { t } = useTranslation();

  const fetchedData = [
    {
      position: 1,
      itemFullName: "Book J.K Rowling - “How to be successful?”",
      numberOfSales: 20,
      profit: 1540,
      currency: "zł",
    },
    {
      position: 2,
      itemFullName: "Book John Flanagan - “How to train your dog?”",
      numberOfSales: 15,
      profit: 1200,
      currency: "zł",
    },
    {
      position: 3,
      itemFullName: "Book Rick Riordan - “Olimpijscy Herosi?”",
      numberOfSales: 10,
      profit: 400,
      currency: "zł",
    },
    {
      position: 4,
      itemFullName: "Book John Flanagan - “How to train your dog?”",
      numberOfSales: 15,
      profit: 1200,
      currency: "zł",
    },
    {
      position: 5,
      itemFullName: "Book Rick Riordan - “Olimpijscy Herosi?”",
      numberOfSales: 10,
      profit: 400,
      currency: "zł",
    },
  ];

  return (
    <WidgetLayout title={t("ranking-of-offers")} navigateTo={"/ranking-of-offers"}>
      <Box
        sx={{ maxHeight: { sm: "300px", md: "230px" }, overflowY: "scroll" }}
      >
        {fetchedData.map((el) => (
          <RankingPosition
            position={el.position}
            itemFullName={el.itemFullName}
            numberOfSales={el.numberOfSales}
            profit={el.profit}
            currency={el.currency}
          />
        ))}
      </Box>
    </WidgetLayout>
  );
};

export default RankingOfOffersWidget;
