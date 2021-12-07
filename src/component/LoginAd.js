import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckIcon from '@mui/icons-material/Check';

const useStyles = makeStyles((theme) => ({
  mainLabel: {
    marginBottom: '15px',
    fontWeight: '700'
  }
}))

const LoginAd = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography variant={"h6"} className={classes.mainLabel} margin={"15px"}><b>Connect with your clients</b></Typography>
      <Typography><CheckIcon fontSize={"small"} /> See products and updates</Typography>
      <Typography><CheckIcon fontSize={"small"} /> Check client's activity</Typography>
      <Typography><CheckIcon fontSize={"small"} /> Find more</Typography>
    </div>
  );
};

export default LoginAd;