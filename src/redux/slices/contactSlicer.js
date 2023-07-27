import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations'; // Tu umieść odpowiednie funkcje do komunikacji z backendem

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        const contactId = action.payload.id;
        state.contacts = state.contacts.filter(el => el.id !== contactId);
        state.isLoading = false;
        state.error = null;
        if (state.filter !== '') {
          state.filter = state.filter.filter(el => el.id !== contactId);
        }
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const { filterContacts, resetFilter } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
