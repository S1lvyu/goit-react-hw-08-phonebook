import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getIsAuthenticated, getUserError } from 'redux/selectors';
import { loginUser } from 'redux/operations';
import loginBackground from '../../images/login-background.jpg';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuthenticated);
  const error = useSelector(getUserError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeInput = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await dispatch(loginUser({ email: email, password: password }));

      if (error) {
        alert('Wrong username or password');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error(error);
      alert('Logging in error! Please try again');
    }
  };
  useEffect(() => {
    if (isAuth) navigate('/contacts');
  }, [isAuth, navigate]);
  return (
    <Box
      sx={{
        backgroundImage: `url(${loginBackground})`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          margin: 'auto',
          width: '300px',
        }}
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '30px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'blue',
            marginTop: '100px',
          }}
        >
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          value={email}
          onChange={handleChangeInput}
        />
        <TextField
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          value={password}
          onChange={handleChangeInput}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Typography variant="p">
          You don't have an account? <Link to="/register">Click here!</Link>
        </Typography>
      </Box>
    </Box>
  );
}
