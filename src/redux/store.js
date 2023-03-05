import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice/slice';
import { contactsReducer } from './cotactsSlice/slice';
import { authReducer } from './auth/slice';
export const store = configureStore({
  reducer: {
	auth: authReducer,
    contacts: contactsReducer,
    filter: filterSlice.reducer,

  },
});
