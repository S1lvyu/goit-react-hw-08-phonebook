import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import Section from 'components/Section/Section';
import Message from 'components/Message/Message';
import { getError } from 'redux/selectors';
import MenuBar from 'components/Menu/Menu';
import contactsBackground from '../../images/phonebook-background.jpg';

export default function Contacts() {
  const errorMessage = useSelector(getError);
  return (
    <Box
      sx={{
        backgroundImage: `url(${contactsBackground})`,
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <MenuBar />
      <Section title="Phonebook">
        {errorMessage ? <Message message={errorMessage} /> : <ContactForm />}
      </Section>
      <Section title="Contacts">
        <ContactFilter />
        {errorMessage ? <Message message={errorMessage} /> : <ContactList />}
      </Section>
    </Box>
  );
}
