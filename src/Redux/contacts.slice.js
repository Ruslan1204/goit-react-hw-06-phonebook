import { createSlice } from '@reduxjs/toolkit';
import { initState } from './contacts.init-state';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initState,
  reducers: {
    contactsFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
    contactsDeleteAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

// export const contactsReducer = createReducer(initState, builder => {
//     builder
//       .addCase(contactsFilterAction, (state, { payload }) => {
//         state.filter = payload;
//       })
//       .addCase(contactsDeleteAction, (state, { payload }) => {
//         state.contacts = state.contacts.filter(contact => contact.id !== payload);
//       });
//   });
