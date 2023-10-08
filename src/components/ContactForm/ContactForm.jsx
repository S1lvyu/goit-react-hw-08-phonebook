import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getPhonebookList } from 'redux/selectors';
import { getUserToken } from 'redux/selectors';
export default function ContactForm() {
  const userToken = useSelector(getUserToken);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getPhonebookList);
  const contactData = { name: name, number: number };

  const handleSubmit = event => {
    event.preventDefault();

    const contactExists =
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(name.toLowerCase()) ||
      contacts.map(contact => contact.number).includes(number);

    if (contactExists) {
      alert('This contact already exists');
      setName('');
      setNumber('');
      return;
    }

    dispatch(addContact({ token: userToken, contact: contactData }));

    setName('');
    setNumber('');
  };
  return (
    <>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        <TextField
          type="text"
          name="name"
          placeholder="Enter name*"
          label="Name"
          required
          // pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          value={name}
          onChange={event => setName(event.target.value)}
          sx={{ width: '400px' }}
        />

        <TextField
          type="tel"
          name="number"
          placeholder="Enter phone number*"
          label="PhoneNumber"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          value={number}
          onChange={event => setNumber(event.target.value)}
          sx={{ width: '400px' }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: 'green',
            marginBottom: '50px',
            marginTop: '20px',
            width: '150px',
            height: '50px',
          }}
        >
          Add Contact
        </Button>
      </Box>
    </>
  );
}
