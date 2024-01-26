import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useDispatch,connect } from 'react-redux';
import { setUser } from './actions';

import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectLogin } from '@pages/Login/selectors';
import { useEffect } from 'react';

import PropTypes from 'prop-types';

const defaultTheme = createTheme();

const Register = ({login}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() =>{
    if (login) {
      navigate("/");
    }
  },[login])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataUser = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };
    if (!dataUser.name) {
      toast.error('Name cannot be empty');
    } else if (!dataUser.email) {
      toast.error('Email cannot be empty');
    } else if (!dataUser.password) {
      toast.error('Password cannot be empty');
    } else if (!isValidEmail(dataUser.email)) {
      toast.error('Invalid email');
    } else if (dataUser.password.length < 6) {
      toast.error('Password must be 6 character');
    } else {
      dispatch(
        setUser(dataUser, () => {
          toast.success('Register success');
          navigate('/login');
        })
      );
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField autoComplete="given-name" name="name" required fullWidth id="name" label="Name" autoFocus />
              </Grid>

              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Toaster />
      </Container>
    </ThemeProvider>
  );
}

Register.propTypes = {
  login: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(Register);