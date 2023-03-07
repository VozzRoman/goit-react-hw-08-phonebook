import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice/slice';
import { contactsReducer } from './cotactsSlice/slice';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  // в localStorage записываем только ТОКЕН
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer), // передаем в Персисит (localStorage)
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
  middleware,
});

export const persistor = persistStore(store);
