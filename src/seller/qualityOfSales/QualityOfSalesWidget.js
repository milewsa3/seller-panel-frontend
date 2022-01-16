import React from "react";
import WidgetLayout from "../WidgetLayout";
import { useTranslation } from "react-i18next";

const QualityOfSalesWidget = () => {
  const { t } = useTranslation();

  return <WidgetLayout title={t("quality-of-sales")} notImplemented />;
};

export default QualityOfSalesWidget;
