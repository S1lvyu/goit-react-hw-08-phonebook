import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import Section from 'components/Section/Section';
import Message from 'components/Message/Message';
import { getError } from 'redux/selectors';
import MenuBar from 'components/Menu/Menu';

export default function Contacts() {
  const errorMessage = useSelector(getError);
  return (
    <>
      <MenuBar />
      <Section title="Phonebook">
        {errorMessage ? <Message message={errorMessage} /> : <ContactForm />}
      </Section>
      <Section title="Contacts">
        <ContactFilter />
        {errorMessage ? <Message message={errorMessage} /> : <ContactList />}
      </Section>
    </>
  );
}
