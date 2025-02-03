import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';


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



function App() {
  const [perfumes, setPerfumes] = useState<PerfumeType[]>([])

  //useEffect(O QUe fazer, Quando Fazer)
   // useEffect para buscar perfumes
  useEffect(()=>{
    fetch("https://one022b-perfumaria.onrender.com/perfumes")
    .then(resposta=>resposta.json())
    .then(dados=>setPerfumes(dados))
  },[])

  
  function handleExcluir(id:number){
    fetch(`https://one022b-perfumaria.onrender.com/perfumes/${id}`,{
      method:"DELETE"
    })
    .then(resposta=>{
      if(resposta.status==200){
        alert("Perfume Excluído com sucesso")
        window.location.reload()
      }
      else{
        alert("Erro ao excluir perfume")
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


  <h2 className='perfume-lista'> Todos os nossos perfumes:</h2>
      <div className="container-perfumes">
        
        {perfumes.map(perf=>{
          return(
            <div key={perf.id} className="perfume-item">
              <h1 className='perfume-nome'>{perf.nome}</h1>
              <img className='imagem-perfume' src={perf.imagem} alt="Imagem de perfume" />
              <p><strong>R$</strong>{perf.preco}</p>
              <p><strong>Volume:</strong> {perf.volume}</p>
              <p><strong>Marca:</strong> {perf.marca}</p>
              <button className='excluir-botao' onClick={()=>{handleExcluir(perf.id)}}>Excluir</button>
              <button ><Link className='Link-botao' to={`/alterar-perfume/${perf.id}`}>Alterar</Link></button>
            </div>
          )
        })}    
      </div>
    </>
  )
}


export default App