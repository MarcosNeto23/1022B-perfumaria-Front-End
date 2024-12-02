import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';


// Definindo o tipo para Usuário
type ClienteType = {
    id: number,
    nome: string,
    sobrenome:string,
    idade:string,
    email: string
  };


  
function AppCliente() {
    const [clientes, setClientes] = useState<ClienteType[]>([]);

    // useEffect para buscar clientes
    useEffect(() => {
      fetch("https://one022b-perfumaria.onrender.com/clientes") // Altere para a URL correta do seu backend
        .then(resposta => resposta.json())
        .then(dados => setClientes(dados));
    }, []);
  
  
  
    return (
      <>  
 
        <div className="container-clientes">
          <h2>Veja os nossos clientes:</h2>
          {clientes.map(cliente => (
            <div key={cliente.id} className="cliente-item">
              <p><strong>Nome Completo:</strong> {cliente.nome} {cliente.sobrenome}</p>
              <p><strong>Email:</strong> {cliente.email}</p>
              <p><strong>Idade do {cliente.nome}:</strong> {cliente.idade} anos</p>
            
  
            </div>
            
          ))}
  
     
        </div>
  
      </>
    )
  }
  
  export default AppCliente