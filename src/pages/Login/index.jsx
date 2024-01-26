import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useDispatch, connect } from 'react-redux';
import { doLoginAction } from './actions';

import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import { useEffect } from 'react';
import { selectLogin } from './selectors';

import PropTypes from 'prop-types';


const defaultTheme = createTheme();

const Login = ({login}) => {
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
      email: data.get('email'),
      password: data.get('password'),
    };
    if (!dataUser.email) {
      toast.error('Email cannot be empty');
    } else if (!isValidEmail(dataUser.email)) {
      toast.error('Invalid email');
    } else if (!dataUser.password) {
      toast.error('Password cannot be empty');
    }else {
      dispatch(
        doLoginAction(dataUser, () => {
          toast.success('Login success');
          navigate('/');
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
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://media.istockphoto.com/id/1415740411/photo/empty-classroom.webp?b=1&s=170667a&w=0&k=20&c=K6V85ko0dwzThxpPRW942vz30r_Mpl6iL_zMAKVxid8=)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Toaster />
    </ThemeProvider>
  );
}

Login.propTypes = {
  login: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(Login);