import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../util/user/userUtils";
import OrdersWidget from "./widget/order/OrdersWidget";
import RankingOfOffersWidget from "./widget/RankingOfOffersWidget";
import BuyerFeedbackWidget from "./widget/BuyerFeedbackWidget";
import SalesAdviceWidget from "./widget/SalesAdviceWidget";
import SalesChartWidget from "./widget/SalesChartWidget";
import QualityOfSalesWidget from "./widget/QualityOfSalesWidget";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Grid
      container
      sx={{
        my: 8,
        height: { xs: "700px", md: "560px" },
        width: "90%",
        mx: "auto",
      }}
      spacing={3}
    >
      <Grid item xs={12} md={5}>
        <OrdersWidget />
      </Grid>
      <Grid item xs={12} md={7}>
        <Grid container spacing={3} direction="column">
          <Grid item xs={9}>
            <Grid container spacing={3}>
              <Grid item xs={5} md={4}>
                <BuyerFeedbackWidget />
              </Grid>
              <Grid item xs={7} md={8}>
                <Grid container spacing={3} direction={"column"}>
                  <Grid item xs={8}>
                    <RankingOfOffersWidget />
                  </Grid>
                  <Grid item xs={4} >
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <SalesAdviceWidget />
                      </Grid>
                      <Grid item xs={6}>
                        <SalesChartWidget />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <QualityOfSalesWidget />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
