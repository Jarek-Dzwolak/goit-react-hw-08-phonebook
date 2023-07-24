import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get(
        'https://64b97ab779b7c9def6c11a2c.mockapi.io/contacts/contacts'
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch contacts.');
    }
  }
);

// Akcja do dodawania kontaktu

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    try {
      const response = await axios.post(
        'https://64b97ab779b7c9def6c11a2c.mockapi.io/contacts/contacts',
        contactData
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to save contact.');
    }
  }
);

// Akcja do usuwania kontaktu
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(
        `https://64b97ab779b7c9def6c11a2c.mockapi.io/contacts/contacts/${contactId}`
      );
      return contactId;
    } catch (error) {
      throw new Error('Failed to delete contact.');
    }
  }
);

// Akcja do aktualizowania danych kontaktu
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact, thunkApi) => {
    try {
      const response = await axios.put(
        `https://64b97ab779b7c9def6c11a2c.mockapi.io/contacts/contacts/${contact.id}`,
        contact
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to update contact.');
    }
  }
);
