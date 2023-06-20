// import { devToolsEnhancer } from '@redux-devtools/extension';
import { initState } from './contacts.init-state';

import { contactsReducer } from './contacts.reducer';

// import { combineReducers} from 'redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contacts.slice';

const rootReducer = combineReducers({
  data: contactSlice,
});

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, initState, enhancer);

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: rootReducer,
});
