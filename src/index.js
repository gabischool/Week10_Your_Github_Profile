import React from 'react';
import ReactDOM from 'react-dom/client';

// import "BrowserRouter" from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the "App" component with "BrowserRouter" */}
    {/* "BrowserRouter" hugi "App" */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
