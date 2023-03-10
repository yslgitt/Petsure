import { combineReducers, configureStore } from '@reduxjs/toolkit';

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
  key: 'root',
  blacklist: ['openvidu', 'room', 'openvidu', 'peerUser'],
  storage,
};

const persistingReducer = combineReducers({});

// const normalReducer = combineReducers({})

const persistedReducer = persistReducer(persistConfig, persistingReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      // ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // ovActions: false,
      // },
    }),
});

export const persistor = persistStore(store);
export default store;
