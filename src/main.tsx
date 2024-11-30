import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroPerfume from './CadastroPerfume.tsx';
import CadastroCliente from './CadastroCliente.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/cadastro-perfume',
    element: <CadastroPerfume />,
  },
  {
    path: "/cadastro-cliente",
    element: <CadastroCliente />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);