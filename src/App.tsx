import { useEffect, useState } from 'react'
import './App.css'


// Definindo o tipo para Perfumes
type PerfumeType = {
  id:number,
  nome:string,
  marca:string,
  fragrancia:string,
  volume:string,
  preco:string,
  imagem:string
}

// Definindo o tipo para Usuário
type ClienteType = {
  id: number,
  nome: string,
  sobrenome:string,
  idade:string,
  email: string
};

function App() {
  const [perfumes, setPerfumes] = useState<PerfumeType[]>([])
  const [clientes, setClientes] = useState<ClienteType[]>([]);

  //useEffect(O QUe fazer, Quando Fazer)
   // useEffect para buscar perfumes
  useEffect(()=>{
    fetch("https://one022b-perfumaria.onrender.com/perfumes")
    .then(resposta=>resposta.json())
    .then(dados=>setPerfumes(dados))
  },[])


  // useEffect para buscar clientes
  useEffect(() => {
    fetch("https://one022b-perfumaria.onrender.com/clientes") // Altere para a URL correta do seu backend
      .then(resposta => resposta.json())
      .then(dados => setClientes(dados));
  }, []);



  return (
    <>  
      <div className="container-perfumes">
        <h2> Lista de Perfumes:</h2>
        {perfumes.map(perf=>{
          return(
            <div key={perf.id} className="perfume-item">
              <h1>{perf.nome}</h1>
              <img src={perf.imagem} alt="Imagem de celular" />
              <p><strong>R$</strong>{perf.preco}</p>
              <p>Volume: {perf.volume}</p>
              <p>Marca: {perf.marca}</p>
            </div>
            
            
          )
        })}

          <a href='./CadastroPerfume'>
                    <button> Cadastrar um Perfume</button>
                </a>
      </div>

      <div className="container-clientes">
        <h2>Lista de Clientes:</h2>
        {clientes.map(cliente => (
          <div key={cliente.id} className="cliente-item">
            <p><strong>Nome Completo:</strong> {cliente.nome} {cliente.sobrenome}</p>
            <p><strong>Email:</strong> {cliente.email}</p>
            <p><strong>Idade do {cliente.nome}:</strong> {cliente.idade} anos</p>
          

          </div>
          
        ))}

            <a href='./CadastroCliente'>
                    <button> Cadastrar um Cliente</button>
                </a>
      </div>

    </>
  )
}

export default App