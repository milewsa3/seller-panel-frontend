import React from "react";
import WidgetLayout from "./WidgetLayout";
import { useTranslation } from "react-i18next";

const SalesChartWidget = () => {
  const { t } = useTranslation();

  return <WidgetLayout title={t("sales-chart")} notImplemented />;
};

export default SalesChartWidget;
