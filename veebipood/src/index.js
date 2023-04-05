import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css'; //peab panema alumise cssi ees. Võetakse npmjs.com veebilehelt
import './index.css'; // alumine on tähtsam, alumine kirjutab ülemise üle
import App from './App';
import { BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


