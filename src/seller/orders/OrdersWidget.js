import React from "react";
import WidgetLayout from "../WidgetLayout";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import OrdersDetail from "./OrdersDetail";
import { Grid, Typography } from "@mui/material";
import PromotionTile from "./PromotionTile";

const OrdersWidget = () => {
  const { t } = useTranslation();

  return (
    <WidgetLayout title={t("orders")} disableNavigate>
      <Box>
        <OrdersDetail
          type={t("orders-unpaid")}
          number={35}
          numberColor={"text.secondary"}
          linkTo={"/orders/unpaid/1"}
        />
        <OrdersDetail
          type={t("orders-not-send")}
          number={16}
          numberColor={"warning.main"}
          linkTo={"/orders/not-send/1"}
        />
        <OrdersDetail
          type={t("orders-returns")}
          number={9}
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
