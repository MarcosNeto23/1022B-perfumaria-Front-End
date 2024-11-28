import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import './index.css'

 
import CadastroPerfume from './componentes/cadastroperfume/CadastroPerfume.tsx';
import CadastroCliente from './componentes/cadastrocliente/CadastroCliente.tsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro-perfume" element={<CadastroPerfume />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);