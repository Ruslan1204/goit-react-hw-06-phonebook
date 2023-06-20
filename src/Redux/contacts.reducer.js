import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';

import { initState } from './contacts.init-state';
import { contactsDeleteAction, contactsFilterAction } from './contacts.action';

// export const contactsReducer = (state = initState, { type, payload }) => {
//   switch (type) {
//     case 'FILTER':
//       return { ...state, filter: payload };
//       case 'DELETE_CONTACTS':
//         return { ...state, contacts: state.contacts.filter(contact => contact.id !== payload) };
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = initState.data.filter, { type, payload }) => {
//   switch (type) {
//     case 'FILTER':
//       return { ...state, filter: payload };
//     default:
//       return state;
//   }
// };

// const contactReducer = (state = initState.data.contacts, { type, payload }) => {
//   switch (type) {
//     case 'DELETE_CONTACTS':
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== payload),
//       };

//     default:
//       return state;
//   }
// };

// export const contactsReducer = combineReducers({
//   filter: filterReducer,
//   contacts: contactReducer,
// });

// const filterReducer = createReducer(initState.data.filter, builder => {
//   builder.addCase(contactsFilterAction, (_, { payload }) => payload);
// });

// const contactReducer = createReducer(initState.data.contacts, builder => {
//   builder.addCase(contactsDeleteAction, (state, { payload }) =>
//     state.filter(contact => contact.id !== payload)
//   );
// });

// export const contactsReducer = combineReducers({
//   filter: filterReducer,
//   contacts: contactReducer,
// });

export const contactsReducer = createReducer(initState, builder => {
  builder
    .addCase(contactsFilterAction, (state, { payload }) => {
      state.filter = payload;
    })
    .addCase(contactsDeleteAction, (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    });
});
