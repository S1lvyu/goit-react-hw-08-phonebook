import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Button } from '@mui/material';
import { logoutUser, getUser } from 'redux/operations';
import { getUserToken, getUserName, getUserInfo } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserModal from 'components/UserModal/UserModal';
export default function MenuBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const userToken = useSelector(getUserToken);
  const userName = useSelector(getUserName);
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenModal = async () => {
    await dispatch(getUser(userToken));

    setOpenModal(true);
    handleClose();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLogout = async () => {
    await dispatch(logoutUser(userToken));

    navigate('/login');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {userName}
            </Typography>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleOpenModal}>My account</MenuItem>
              <UserModal
                open={openModal}
                onClose={handleCloseModal}
                userEmail={userInfo?.email}
                userName={userInfo?.name}
              />
            </Menu>
          </div>
          <Button
            variant="text"
            sx={{ color: 'white', fontWeight: 'bold' }}
            onClick={handleLogout}
          >
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
