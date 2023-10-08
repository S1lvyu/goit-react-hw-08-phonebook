import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { getUserToken, getPhonebookList } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { editContact } from 'redux/operations';
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
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

export default function EditModal({ contact }) {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [contactExists, setContactExists] = React.useState(false);
  const userToken = useSelector(getUserToken);
  const dispatch = useDispatch();
  const editedContact = { name: name, number: number };
  const phoneBook = useSelector(getPhonebookList);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setContactExists(false);
  };
  const handleChangeInput = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
    const exists = phoneBook.some(
      contact => contact.name === value || contact.number === value
    );
    if (exists) {
      setContactExists(true);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (!contactExists) {
      dispatch(
        editContact({
          token: userToken,
          id: contact.id,
          updatedContactData: editedContact,
        })
      );
      handleClose();
    } else {
      alert('This name or phone number already exists in your contacts list');
    }
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Contact
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter new Name"
            variant="outlined"
            type="text"
            name="name"
            onChange={handleChangeInput}
            onSubmit={handleSubmit}
          />
          <TextField
            id="outlined-basic"
            label="enter new phone"
            variant="outlined"
            name="number"
            type="number"
            onChange={handleChangeInput}
          />
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Edit
          </Button>
          <Button type="button" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
