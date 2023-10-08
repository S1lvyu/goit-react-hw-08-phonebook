import React from 'react';

export default function Message({ message }) {
  return (
    <p style={{ margin: '20px auto', fontWeight: 'bold', fontSize: '20px' }}>
      {message}
    </p>
  );
}
