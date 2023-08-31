import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';


/* sintaxis anterior a version 18 de React:
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
Sintaxis actual post v18:
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
