import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const CheckedLabel = ({ children, ...props }) => {
  return (
    <Typography sx={{ display: 'flex', alignItems: 'center', mb: 2 }}><CheckIcon sx={{ mr: 5 }}
                                                                                 fontSize={"small"}/>{children}
    </Typography>
  )
}

const LoginAd = () => {

  return (
    <Box>
      <Typography variant="h5" sx={{ mt: 15, mb: 10, fontWeight: 'bold' }}>Connect with your
        clients</Typography>
      <CheckedLabel>See products and updates</CheckedLabel>
      <CheckedLabel>Check client's activity</CheckedLabel>
      <CheckedLabel>Find more</CheckedLabel>
    </Box>
  );
};

export default LoginAd;