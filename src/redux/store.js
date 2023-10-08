import { configureStore } from '@reduxjs/toolkit';

import { phonebookReducer } from './phonebookSlice';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    users: userReducer,
  },
});
