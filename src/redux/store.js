import { configureStore } from '@reduxjs/toolkit';
import{rootReducer} from './slice'
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
  import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorite',
  storage,
};

// const persistedReducer = persistReducer(persistConfig, )
// Add the favreducer from slice

export const store = configureStore({
    reducer:{
        // favorite:persistedReducer,
        root: rootReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)