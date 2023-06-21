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

// const mapName = contacts
// .map(contact => {
//   return contact.name;
// })
// .join('')
// .includes(contact.name);


// if (!mapName) {
//   setContacts(prevState => {
//     return [contact, ...prevState];
//   });
// } else {
//   return alert(`${name} is already in contacts.`);
// }