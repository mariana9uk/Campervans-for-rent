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
import {favoritesReducer} from './FavouriteSlice'

const persistConfig = {
  key: 'favorites',
  storage,
  whiteList: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer)


export const store = configureStore({
    reducer:{
        favorites:persistedReducer,
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