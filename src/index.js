import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import {PersistGate} from "redux-persist/integration/react";
import './index.css';
import{BrowserRouter}from 'react-router-dom';
import {Provider} from 'react-redux';
import { persistor, store } from './redux/store';
import{ GlobalStyle} from './GlobalStyles'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename='/Campervans-for-rent'>
     <App />
     <GlobalStyle/>
    </BrowserRouter>
    </PersistGate>
    </Provider>
 
  </React.StrictMode>
);
