import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {BrowserRouter} from 'react-router-dom';
import reducer,{initialState} from './reducer';
import { StateProvider } from './StateProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  <BrowserRouter>
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
  </React.StrictMode>
  /* </BrowserRouter> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
