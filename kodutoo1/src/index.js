import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";

// navigeerimiseks:
// 1. nmp install react-router-dom (installib mooduli node__modules kausta)
// 2. index.js failis panen App ümber Browserouteri
// 3. App.js failis teen URLi ja HTMLi seosed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

