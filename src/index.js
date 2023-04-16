import React from 'react';
import ReactDOM from 'react-dom/client';
import  { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import './styles.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
