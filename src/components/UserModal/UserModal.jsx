import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserModal({ open, onClose, userEmail, userName }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}
        >
          User Info
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <span style={{ fontWeight: 'bold' }}>User email:</span> {userEmail}
        </Typography>
        <Typography>
          {' '}
          <span style={{ fontWeight: 'bold' }}>Name:</span> {userName}
        </Typography>
      </Box>
    </Modal>
  );
}
