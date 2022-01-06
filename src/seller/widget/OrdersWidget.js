import React from "react";
import WidgetLayout from "./WidgetLayout";
import { useTranslation } from "react-i18next";

const OrdersWidget = () => {
  const { t } = useTranslation();

  return <WidgetLayout title={t("orders")}>Helllo orders</WidgetLayout>;
};

export default OrdersWidget;
