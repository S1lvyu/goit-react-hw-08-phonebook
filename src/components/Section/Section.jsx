import React from 'react';

import PropTypes from 'prop-types';

export default function Section({ children, title }) {
  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '50px auto 0',
        border: '1px solid gray',
        borderRadius: '5px',
        boxShadow: '10px 10px 10px gray',
        paddingBottom: '10px',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>{title}</h1>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string,
};
