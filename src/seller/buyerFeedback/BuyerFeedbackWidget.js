import React from "react";
import WidgetLayout from "../WidgetLayout";
import { useTranslation } from "react-i18next";

const BuyerFeedbackWidget = () => {
  const { t } = useTranslation();

  return <WidgetLayout title={t("buyer-feedback")} notImplemented/>
};

export default BuyerFeedbackWidget;
