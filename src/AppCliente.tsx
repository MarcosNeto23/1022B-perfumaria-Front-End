import { useEffect, useState } from 'react'
import './AppCliente.css'
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

    function handleExcluirCliente(id:number){
      fetch(`https://one022b-perfumaria.onrender.com/clientes/${id}`,{
        method:"DELETE"
      })
      .then(resposta=>{
        if(resposta.status==200){
          alert("Cliente Excluído com sucesso")
          window.location.reload()
        }
        else{
          alert("Erro ao excluir cliente")
        }
      })
    }
  
  
  
    return (
      <>  
         <header>
      <div className="cabeçalho-app">
          <ul className='menu-app'>
          <li><Link to={"/"}>Início</Link></li>
          <li><Link to={"/lista-cliente"}>Veja nossos clientes</Link></li>
          <li><Link to={"/cadastro-perfume"}>Cadastre um perfume</Link></li>
          <li> <Link to={"/cadastro-cliente"}>Cadastrar um cliente</Link></li>

          </ul>
        </div>
  </header>


        <div className="container-clientes">
          <h2>Veja os nossos clientes:</h2>
          {clientes.map(cliente => (
            <div key={cliente.id} className="cliente-item">
              <p><strong>Nome Completo:</strong> {cliente.nome} {cliente.sobrenome}</p>
              <p><strong>Email:</strong> {cliente.email}</p>
              <p><strong>Idade do {cliente.nome}:</strong> {cliente.idade} anos</p>
              <button className='excluir-botao' onClick={()=>{handleExcluirCliente(cliente.id)}}>Excluir</button>
              <button ><Link className='Link-botao' to={`/alterar-cliente/${cliente.id}`}>Alterar</Link></button>
              
            </div>
            
          ))}
  
     
        </div>
  
      </>
    )
  }
  
  export default AppCliente