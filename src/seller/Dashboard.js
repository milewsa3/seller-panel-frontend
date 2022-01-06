import React, { useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedIn } from '../util/user/userUtils';
import OrdersWidget from './widget/OrdersWidget';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Grid container sx={{ my: 8, height: {xs: '700px', md: '560px'}, width: '90%', mx: 'auto'}} spacing={3}>
      <Grid item xs={12} md={5}>
        <OrdersWidget />
      </Grid>
      <Grid item xs={12} md={7} container spacing={3} direction="column">
        <Grid item xs={9} container spacing={3}>
          <Grid item xs={4} md={3}>
            <Paper sx={{height: '100%'}}>Buyer feedback</Paper>
          </Grid>
          <Grid item xs={8} md={9} container spacing={3} direction={"column"}>
            <Grid item xs={8}>
              <Paper sx={{height: '100%'}}>Ranking of offers</Paper>
            </Grid>
            <Grid item xs={4} container spacing={3}>
              <Grid item xs={6}>
                <Paper sx={{height: '100%'}}>Sales advice</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper sx={{height: '100%'}}>Sales chart</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{height: '100%'}}>Quality of sales</Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;