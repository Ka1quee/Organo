import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //avisa os erros de forma amigavel
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

