import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const federated = {
  google_client_id: "261857359214-i88583s7eusmd9he5su6s6pnfdig52r2.apps.googleusercontent.com"
};

ReactDOM.render(
  <React.StrictMode>
    <App federated={federated} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
