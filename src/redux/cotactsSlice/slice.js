import { createSlice} from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/operations/operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => builder
  .addCase(fetchContacts.pending, state => {
	 state.isLoading = true;
  }).addCase(fetchContacts.fulfilled, (state, action) => {
	   state.isLoading = false;
      state.items = action.payload;
      state.error = null;
  }).addCase(fetchContacts.rejected, (state, action) => {
	   state.isLoading = false;
      state.error = action.payload;
  }).addCase(addContact.pending, state => {
		state.isLoading = true;
  }).addCase(addContact.fulfilled, (state, action)=> {
		state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
  }).addCase(addContact.rejected, (state, action) => {
	   state.isLoading = false;
      state.error = action.payload;

  }).addCase(deleteContact.pending, state => {
		state.isLoading = true;
  }).addCase(deleteContact.fulfilled, (state, action)=> {
		state.isLoading = false;
	      state.error = null;
	      const index = state.items.findIndex(
	        contact => contact.id === action.payload.id
	      );
	      state.items.splice(index, 1);
  }).addCase(deleteContact.rejected, (state, action)=>{
		state.isLoading = false;
      state.error = action.payload;
  })
//   .addMatcher(isAnyOf(
// 		fetchContacts.pending,
// 		addContact.pending,
// 		deleteContact.pending,
// 		state => {
// 			state.isLoading = true;
// 		}
//   ))

//   extraReducers: {
//     //fetchContacts
//     [fetchContacts.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.items = action.payload;
//       state.error = null;
//     },
//     [fetchContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//       //addContact
//     },
//     [addContact.pending](state) {
//       state.isLoading = true;
//     },
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.unshift(action.payload);
//     },
//     [addContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     //deleteContact
//     [deleteContact.pending](state) {
//       state.isLoading = true;
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
});

export const contactsReducer = contactsSlice.reducer;
