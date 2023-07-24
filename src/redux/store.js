import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './slices/contactSlicer';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
