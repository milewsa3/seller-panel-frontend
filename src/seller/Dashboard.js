import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
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
    <Container>
      <Typography variant="h2" color="text.primary">
        Welcome home
      </Typography>
    </Container>
  );
};

export default Dashboard;