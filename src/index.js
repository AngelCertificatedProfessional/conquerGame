import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import './styles/main.css';


const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
