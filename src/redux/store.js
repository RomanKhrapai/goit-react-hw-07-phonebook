/* eslint-disable no-unused-vars */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REGISTER,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import contactsReduser from './contacts/contacts-reduser';

const middleware = [
  ...getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
    // },
  }),
  logger,
];

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

export const store = configureStore({
  reducer: { contacts: contactsReduser },

  // devTools: process.env.NODE_ENV === 'development',
});

//const persistor = persistStore(store);

//default { store, persistor };
