import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, getUser } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isAuthenticated = false;
  state.userInfo = null;
};
const loadUserFromStorage = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return user;
    }
  } catch (error) {
    console.error('Error loading user from localStorage:', error);
  }
  return null;
};
const UserSlice = createSlice({
  name: 'users',
  initialState: {
    user: loadUserFromStorage(),
    isAuthenticated: !!loadUserFromStorage(),
    isLoading: true,
    error: null,
    userInfo: null,
  },
  extraReducers: {
    [registerUser.pending]: handlePending,
    [registerUser.fulfilled](state, action) {
      state.user = action.payload;
      state.error = null;
      state.isAuthenticated = true;
      state.isLoading = false;

      state.userInfo = action.payload.user;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    [registerUser.rejected]: handleRejected,
    [loginUser.pending]: handlePending,
    [loginUser.fulfilled](state, action) {
      state.user = action.payload;
      state.error = null;
      state.isAuthenticated = true;
      state.isLoading = false;

      state.userInfo = action.payload.user;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    [loginUser.rejected]: handleRejected,
    [logoutUser.pending]: handlePending,
    [logoutUser.rejected]: handleRejected,
    [logoutUser.fulfilled](state) {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
      state.userInfo = null;
      localStorage.removeItem('user');
    },
    [getUser.pending]: handlePending,
    [getUser.rejected]: handleRejected,
    [getUser.fulfilled](state, action) {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
      state.userInfo = action.payload;
    },
  },
});
export const userReducer = UserSlice.reducer;
