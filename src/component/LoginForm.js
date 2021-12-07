import React, { useState } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import AuthInput from './AuthInput';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '24px',
    marginBottom: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    width: '350px',
  },
  root: {
    '&.MuiTextField-root': {
      margin: '50px',
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '12px',
  },
  submit: {
    margin: '12px',
  },
}))

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const LoginForm = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const error = false

  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  const switchMode = () => {
    setFormData(initialState)
    setIsSignup(prevIsSignup => !prevIsSignup)
    setShowPassword(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
      <Paper className={classes.paper} elevation={3}>
        <Typography style={{marginBottom: '15px'}} variant="h5">{isSignup ? 'Sign up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <AuthInput
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                    error={Boolean(error?.firstName)}
                    helperText={error?.firstName}
                  />
                  <AuthInput
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                    error={Boolean(error?.lastName)}
                    helperText={error?.lastName}
                  />
                </>
              )
            }
            <AuthInput name="email" label="Email Address" handleChange={handleChange} type="email" error={Boolean(error?.email)} helperText={error?.email}/>
            <AuthInput name="password" label="Password" handleChange={handleChange} error={Boolean(error?.password)} helperText={error?.password} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            { isSignup && <AuthInput name="confirmPassword" label="Repeat Password" handleChange={handleChange} error={Boolean(error?.confirmPassword)} helperText={error?.confirmPassword} type="password"/> }
          </Grid>
          <Button style={{marginTop: '30px'}} type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Button style={{color: 'grey'}} onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up' }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
  );
};

export default LoginForm;