import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './slices/contactSlicer';
import { persistStore, persistReducer } from 'redux-persist'; // Importuj potrzebne funkcje z redux-persist
import storage from 'redux-persist/lib/storage'; // Wybierz rodzaj storage, który chcesz użyć (localStorage, sessionStorage, itp.)

// Konfiguruj persystencję dla reducera 'contacts'
const persistConfig = {
  key: 'root', // Klucz, pod którym dane będą przechowywane w storage
  storage, // Wybrany rodzaj storage
  // Inne opcje konfiguracyjne, jeśli są potrzebne
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

// Skonfiguruj store, korzystając z persistedReducer
export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

// Utwórz persistor z użyciem store
export const persistor = persistStore(store);
