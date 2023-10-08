import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../images/contacts-background.jpg';
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        backgroundSize: 'cover',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          fontSize: '42px',
          fontWeight: 'bold',
          paddingTop: '250px',
          color: 'black',
        }}
      >
        Welcome to PhoneBook App
      </Typography>
      <Box
        sx={{
          margin: '100px auto',
          width: '300px',
          height: '300px',
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        <Button
          sx={{
            width: '150px',
            height: '60px',
            fontSize: '22px',
            backgroundColor: 'black',
          }}
          variant="contained"
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </Button>
        <Button
          sx={{
            width: '150px',
            height: '60px',
            fontSize: '22px',
            backgroundColor: 'black',
          }}
          variant="contained"
          onClick={() => {
            navigate('/register');
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}
