import { useEffect, useState } from 'react'
import './App.css'


// Definindo o tipo para Produto
type ProdutoType = {
  id:number,
  nome:string,
  descricao:string,
  preco:string,
  imagem:string
}

// Definindo o tipo para Usuário
type UsuarioType = {
  id: number;
  nome: string;
  email: string;
};

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);

  //useEffect(O QUe fazer, Quando Fazer)
   // useEffect para buscar produtos
  useEffect(()=>{
    fetch("https://localhost:8000/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setProdutos(dados))
  },[])


  // useEffect para buscar usuários
  useEffect(() => {
    fetch("https://one022b-marketplace-fork-back-end.onrender.com/usuarios") // Altere para a URL correta do seu backend
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados));
  }, []);



  return (
    <>  
      <div className="container-produtos">
        <h2> Lista de Produtos:</h2>
        {produtos.map(prod=>{
          return(
            <div key={prod.id} className="produto-item">
              <h1>{prod.nome}</h1>
              <img src={prod.imagem} alt="Imagem de celular" />
              <p>{prod.preco}</p>
              <p>{prod.descricao}</p>
            </div>
            
          )
        })}
      </div>

      <div className="container-usuarios">
        <h2>Lista de Usuários:</h2>
        {usuarios.map(usuario => (
          <div key={usuario.id} className="usuario-item">
            <p><strong>Nome:</strong> {usuario.nome}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
          </div>
        ))}
      </div>

    </>
  )
}

export default App