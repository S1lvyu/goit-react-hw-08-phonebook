import React from 'react';

import { Button } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
export default function DeleteButton({ contact }) {
  const dispatch = useDispatch();
  const userToken = useSelector(getUserToken);
  const handleDelete = () => {
    dispatch(deleteContact({ token: userToken, id: contact.id }));
  };
  return (
    <Button
      type="button"
      onClick={handleDelete}
      variant="contained"
      sx={{ backgroundColor: 'red', minWidth: '90px', maxHeight: '37px' }}
    >
      Delete
    </Button>
  );
}
