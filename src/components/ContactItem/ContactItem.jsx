import React from 'react';
import DeleteButton from 'components/DeleteButton/DeleteButton';

import PropTypes from 'prop-types';
import EditModal from 'components/EditModal/EditModal';
export default function ContactItem({ contact }) {
  return (
    <li
      style={{
        fontSize: '18px',
        marginLeft: '15px',
        display: 'flex',
        gap: '10px',
        justifyContent: 'space-between',
        maxHeight: '50px',
      }}
    >
      <span style={{ fontWeight: 'bold', minWidth: '180px' }}>
        {contact.name}:
      </span>{' '}
      <p style={{ minWidth: '150px', margin: '0' }}>{contact.number}</p>
      <EditModal contact={contact} />
      <DeleteButton contact={contact} />
    </li>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object,
};
