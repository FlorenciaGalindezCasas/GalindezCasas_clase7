import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CarritoProvider } from './Componentes/CarritoContext/CarritoContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <CarritoProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CarritoProvider>
);
