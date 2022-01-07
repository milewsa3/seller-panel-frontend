import React from "react";
import WidgetLayout from "./WidgetLayout";
import { useTranslation } from "react-i18next";

const RankingOfOffersWidget = () => {
  const { t } = useTranslation();

  return (
    <WidgetLayout title={t("ranking-of-offers")}>
      Ranking of offers
    </WidgetLayout>
  );
};

export default RankingOfOffersWidget;
