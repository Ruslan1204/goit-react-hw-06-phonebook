import { createSlice } from '@reduxjs/toolkit';
import { initState } from './contacts.init-state';
import { nanoid } from 'nanoid';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initState,
  reducers: {
    addContactsAction: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    contactsFilterAction(state, { payload }) {
      state.filter = payload;
    },
    contactsDeleteAction(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const {contactsFilterAction, contactsDeleteAction, addContactsAction } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
