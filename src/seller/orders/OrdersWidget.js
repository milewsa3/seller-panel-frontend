import React, { useEffect, useState } from "react";
import WidgetLayout from "../WidgetLayout";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import OrdersDetail from "./OrdersDetail";
import { Grid, Typography } from "@mui/material";
import PromotionTile from "./PromotionTile";

const initOrderCounts = {
  notSendCount: 0,
  unpaidCount: 0,
  returnsCount: 0,
};

const OrdersWidget = () => {
  const { t } = useTranslation();
  const [orderCounts, setOrderCounts] = useState(initOrderCounts);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URI}/orders/count`)
      .then((res) => res.json())
      .then((data) => setOrderCounts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <WidgetLayout title={t("orders")} disableNavigate>
      <Box>
        <OrdersDetail
          type={t("orders-unpaid")}
          number={orderCounts.unpaidCount}
          numberColor={"text.secondary"}
          linkTo={"/orders/unpaid/1"}
        />
        <OrdersDetail
          type={t("orders-not-send")}
          number={orderCounts.notSendCount}
          numberColor={"warning.main"}
          linkTo={"/orders/not-send/1"}
        />
        <OrdersDetail
          type={t("orders-returns")}
          number={orderCounts.returnsCount}
          numberColor={"error.main"}
          linkTo={"/orders/returns/1"}
        />
        <Grid
          container
          alignItems={"center"}
          spacing={4}
          sx={{ width: "90%", mx: "auto", mt: 0.5, mb: 3 }}
        >
          <Grid item xs={12} zeroMinWidth>
            <Typography noWrap variant={"h6"}>
              {t("orders-promotion")}
            </Typography>
          </Grid>
          <Grid item xs>
            <PromotionTile
              promotionImageUrl={"/images/battery/battery-low.png"}
              label={t("orders-promotion-low")}
              tooltip={t("orders-promotion-low-tooltip")}
            />
          </Grid>
          <Grid item xs>
            <PromotionTile
              promotionImageUrl={"/images/battery/battery-half.png"}
              label={t("orders-promotion-medium")}
              tooltip={t("orders-promotion-medium-tooltip")}
            />
          </Grid>
          <Grid item xs>
            <PromotionTile
              promotionImageUrl={"/images/battery/battery-full.png"}
              label={t("orders-promotion-high")}
              tooltip={t("orders-promotion-high-tooltip")}
            />
          </Grid>
        </Grid>
      </Box>
    </WidgetLayout>
  );
};

export default OrdersWidget;
