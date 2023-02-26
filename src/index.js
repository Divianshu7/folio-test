import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import storage from 'redux-persist/lib/storage';
import authReducer from './state'
import { Provider } from 'react-redux';
import persistReducer from 'redux-persist/es/persistReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
const persistConfig = { key: 'root', storage, version: 1 }
const root = ReactDOM.createRoot(document.getElementById('root'));
const persistReducerr = persistReducer(persistConfig, authReducer)
const store = configureStore({
  reducer: persistReducerr,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})
root.render(
  <Provider store={store} persistStore={persistStore(store)} >
    <App />
  </Provider>
);

