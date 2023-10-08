import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getIsAuthenticated, getUserError } from 'redux/selectors';
import { registerUser } from 'redux/operations';
import registerBackground from '../../images/register-background.jpg';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuthenticated);
  const error = useSelector(getUserError);
  const handleChangeInput = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'name') {
      setName(value);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(
        registerUser({ name: name, email: email, password: password })
      );
      if (error) {
        alert('This email address is used for another account');
        setEmail('');
      }
    } catch (error) {
      console.error(error);
      alert('Registration error! Please try again');
    }
  };
  useEffect(() => {
    if (isAuth) navigate('/contacts');
  }, [isAuth, navigate]);
  return (
    <Box
      sx={{
        backgroundImage: `url(${registerBackground})`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
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
          Register
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          value={email}
          onChange={handleChangeInput}
          required
        />
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          type="name"
          onChange={handleChangeInput}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          onChange={handleChangeInput}
          required
        />
        <Button type="submit" variant="contained">
          Register
        </Button>
        <Typography variant="p">
          You already have an account? <Link to="/login">Click here!</Link>
        </Typography>
      </Box>
    </Box>
  );
}
