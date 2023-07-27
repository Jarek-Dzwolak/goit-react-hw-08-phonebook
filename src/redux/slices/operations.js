import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const contacts = state.contacts.contacts; // Poprawione: zmienione z state.contacts.names na state.contacts.contacts
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
  async (id, thunkAPI) => {
    try {
      const deleteResponse = await axios.delete(`/contacts/${id}`);
      console.log(`this is response DELETE data`, deleteResponse.data);
      return deleteResponse.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
