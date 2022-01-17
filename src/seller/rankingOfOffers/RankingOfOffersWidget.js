import React, { useEffect, useState } from "react";
import WidgetLayout from "../WidgetLayout";
import { useTranslation } from "react-i18next";
import RankingPosition from "./RankingPosition";
import Box from "@mui/material/Box";

const RankingOfOffersWidget = () => {
  const { t } = useTranslation();
  const [fetchedRankingOffers, setFetchedRankingOffers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URI}/ranking-offers`)
      .then((res) => res.json())
      .then((data) => {
        setFetchedRankingOffers(data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <WidgetLayout
      title={t("ranking-of-offers")}
      navigateTo={"/ranking-of-offers/1"}
    >
      <Box
        sx={{ maxHeight: { sm: "300px", md: "230px" }, overflowY: "scroll" }}
      >
        {fetchedRankingOffers.map((el, index) => (
          <RankingPosition
            position={index + 1}
            itemFullName={el.fullItemName}
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
