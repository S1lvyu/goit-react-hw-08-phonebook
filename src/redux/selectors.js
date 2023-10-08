import { createSelector } from '@reduxjs/toolkit';

export const getPhonebookList = state => state.contacts.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;
export const getFilteredContacts = createSelector(
  [getPhonebookList, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
export const getIsAuthenticated = state => state.users.isAuthenticated;
export const getUserToken = state => state.users.user?.token;
export const getUserName = state => state.users.user?.user.name;
export const getUserInfo = state => state.users.userInfo;
export const getUserError = state => state.users.error;
