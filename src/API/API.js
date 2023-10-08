import axios from 'axios';

const CONTACTS_URL = 'https://connections-api.herokuapp.com/';
const CONTACTS_API = axios.create({
  baseURL: CONTACTS_URL,
});

export const getAllContacts = token =>
  CONTACTS_API.get('/contacts', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const addContactApi = (token, newContact) =>
  CONTACTS_API.post('/contacts', newContact, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const deleteContactApi = (token, id) =>
  CONTACTS_API.delete(`/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const editContactApi = (token, id, updatedContactData) =>
  CONTACTS_API.patch(`/contacts/${id}`, updatedContactData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
const USER_URL = 'https://connections-api.herokuapp.com/users/';
const USER_API = axios.create({
  baseURL: USER_URL,
});

export const register = newUser => USER_API.post('/signup', newUser);
export const login = user => USER_API.post('/login', user);
export const logout = token =>
  USER_API.post('/logout', null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const getCurrentUser = token =>
  USER_API.get('/current', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
