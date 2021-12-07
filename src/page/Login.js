import React from 'react';
import LoginForm from '../component/LoginForm';
import { Container } from '@mui/material';
import LoginAd from '../component/LoginAd';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    marginTop: '30px',
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
  }
}))

const Login = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <LoginAd />
      <LoginForm />
    </div>
  );
};

export default Login;