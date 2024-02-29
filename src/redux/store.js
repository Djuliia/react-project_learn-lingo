import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  PAUSE,
} from 'redux-persist';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { teachersReducer } from './teachersSlice';
import { favoriteReducer } from './favoritesSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const ignoredPersistenceActions = [
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
];

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    // auth,
    filter: filterReducer,
    favorites: persistReducer(persistConfig, favoriteReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ignoredPersistenceActions,
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
