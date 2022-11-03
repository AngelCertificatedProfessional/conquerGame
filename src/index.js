import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import './styles/main.css';
import { BrowserRouter } from "react-router-dom";


const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
