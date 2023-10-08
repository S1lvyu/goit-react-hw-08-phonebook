import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getAllContacts,
  addContactApi,
  deleteContactApi,
  register,
  login,
  logout,
  getCurrentUser,
  editContactApi,
} from 'API/API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContactsAll',
  async (token, thunkAPI) => {
    try {
      const response = await getAllContacts(token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ token, contact }, thunkAPI) => {
    try {
      const response = await addContactApi(token, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ token, id }, thunkAPI) => {
    try {
      const response = await deleteContactApi(token, id);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ token, id, updatedContactData }, thunkAPI) => {
    try {
      const response = await editContactApi(token, id, updatedContactData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await register(user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (user, thunkAPI) => {
    try {
      const response = await login(user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  'users/logoutUser',
  async (token, thunkAPI) => {
    try {
      const response = await logout(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getUser = createAsyncThunk(
  'users/getUser',
  async (token, thunkAPI) => {
    try {
      const response = await getCurrentUser(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
