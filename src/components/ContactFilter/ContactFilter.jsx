import React from 'react';

import { editFilter } from 'redux/phonebookSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { TextField, Box, Typography } from '@mui/material';

export default function ContactFilter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    return dispatch(editFilter(event.target.value));
  };

  return (
    <Box
      sx={{
        margin: '0 auto',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Typography variant="h2" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
        Search contact by name
      </Typography>

      <TextField
        type="text"
        name="filter"
        id="outlined-basic"
        label="Enter Name"
        variant="outlined"
        value={filter}
        onChange={handleFilterChange}
      />
    </Box>
  );
}
