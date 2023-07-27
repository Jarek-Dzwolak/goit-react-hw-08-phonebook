import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Obsługa braku tokena (użytkownik nie jest zalogowany lub token wygasł)
        throw new Error('Brak autoryzacji');
      }

      const response = await axios.get('/contacts', {
        headers: { Authorization: token },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const contacts = state.contacts.names;
    const existingContact = contacts.find(c => c.name === contact.name);
    if (existingContact) {
      alert(`${existingContact.name} is already in your contacts`);
      return thunkAPI.rejectWithValue('Kontakt już istnieje');
    }
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
