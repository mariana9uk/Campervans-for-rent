import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import {PersistGate} from "redux-persist/integration/react";
import './index.css';
import{BrowserRouter}from 'react-router-dom';
import {Provider} from 'react-redux';
import { persistor, store } from './redux/store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter basename='/Campervans-for-rent'>
     <App />
    </BrowserRouter>
    </Provider>
    </PersistGate>
  </React.StrictMode>
);
