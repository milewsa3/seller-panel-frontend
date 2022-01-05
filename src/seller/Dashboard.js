import React, { useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedIn } from '../util/user/userUtils';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Grid container sx={{ my: 8, height: '560px', width: '90%', mx: 'auto'}} spacing={3}>
      <Grid item xs={5}>
        <Paper sx={{height: '100%'}}>Orders</Paper>
      </Grid>
      <Grid item xs={7} container spacing={3} direction="column">
        <Grid item xs={9} container spacing={3}>
          <Grid item xs={3}>
            <Paper sx={{height: '100%'}}>Buyer feedback</Paper>
          </Grid>
          <Grid item xs={9} container spacing={3} direction={"column"}>
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