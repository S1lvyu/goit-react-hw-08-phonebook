import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import Message from 'components/Message/Message';

import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export default function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul
      style={{
        listStyle: 'none',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        paddingLeft: 0,
        maxWidth: '650px',
      }}
    >
      {filteredContacts.length === 0 ? (
        <Message message="No contacts found" />
      ) : (
        filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
    </ul>
  );
}
