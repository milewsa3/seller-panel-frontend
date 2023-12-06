import React from "react";
import WidgetLayout from "../WidgetLayout";
import { useTranslation } from "react-i18next";

const SalesAdviceWidget = () => {
  const { t } = useTranslation();

  return <WidgetLayout title={t("sales-advice")} notImplemented />;
};

export default SalesAdviceWidget;
