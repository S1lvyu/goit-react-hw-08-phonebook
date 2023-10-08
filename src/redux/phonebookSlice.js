import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';

const phoneBookInitialState = {
  contacts: {
    items: [],
    isLoading: true,
    error: null,
  },
  filter: '',
};
const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};
const PhonebookSlice = createSlice({
  name: 'contacts',
  initialState: phoneBookInitialState,
  reducers: {
    editFilter: {
      reducer(state, action) {
        state.filter = action.payload.filter;
      },
      prepare(filter) {
        return {
          payload: {
            filter,
          },
        };
      },
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.items = [...state.contacts.items, action.payload];
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
      state.filter = '';
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [deleteContact.rejected]: handleRejected,
    [editContact.pending]: handlePending,
    [editContact.rejected]: handleRejected,
    [editContact.fulfilled](state, action) {
      const { id, name, number } = action.payload;
      state.contacts.items = state.contacts.items.map(contact =>
        contact.id === id
          ? {
              ...contact,
              name: name.length > 0 ? name : contact.name,
              number: number.length > 0 ? number : contact.number,
            }
          : contact
      );
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const phonebookReducer = PhonebookSlice.reducer;
export const { editFilter } = PhonebookSlice.actions;
