import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import './CadastroPerfume.css'


function CadastroPerfume(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome,setNome] = useState("")
    const [marca,setMarca] = useState("")
    const [fragrancia,setFragrancia] = useState("")
    const [volume,setVolume] = useState("")
    const [preco,setPreco] = useState("")
    const [imagem,setImagem] = useState("")

    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar os perfumes");
        const perfume = {
            id: id,
            nome: nome,
            marca: marca,
            fragrancia: fragrancia,
            volume: volume,
            preco: preco,
            imagem: imagem,
        }
        fetch("https://one022b-perfumaria.onrender.com/perfumes",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(perfume)
        }).then(response => {
            if(response.status === 200){
                alert("Perfume cadastrado com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao cadastrar perfume")
            }
        })
    }
    function handleId(event:ChangeEvent<HTMLInputElement>){
        setId(event.target.value)
    }
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleMarca(event:ChangeEvent<HTMLInputElement>){
        setMarca(event.target.value)
    }
    function handleFragrancia(event:ChangeEvent<HTMLInputElement>){
        setFragrancia(event.target.value)
    }
    function handleVolume(event:ChangeEvent<HTMLInputElement>){
        setVolume(event.target.value)
    }
    function handlePreco(event:ChangeEvent<HTMLInputElement>){
        setPreco(event.target.value)
    }
    
    function handleImagem(event:ChangeEvent<HTMLInputElement>){
        setImagem(event.target.value)
    }

    return(
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


        <div className="tela-perfume">
            
            <h1>Tela de Cadastro Perfumes:</h1>
            <form className="perfume-cadastro" onSubmit={handleForm}>
            <div className="container-cadastro">
                <div>
                    <label htmlFor="id"><strong>Crie um ID para o Perfume:</strong></label>
                    <input type="text" name="id" onChange={handleId} />
                </div>
                <div>
                    <label htmlFor="nome"><strong>Coloque o Nome do Perfume:</strong></label>
                    <input type="text" name="nome" onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="marca"><strong>Coloque a Marca do Perfume:</strong></label>
                    <input type="text" name="marca" onChange={handleMarca} />
                </div>
                <div>
                    <label htmlFor="fragrancia"><strong>Coloque a Frangrancia do Perfume:</strong></label>
                    <input type="text" name="fragrancia" onChange={handleFragrancia} />
                </div>
                <div>
                    <label htmlFor="volume"><strong>Coloque o Volume(mL) do Perfume:</strong></label>
                    <input type="text" name="volume" onChange={handleVolume} />
                </div>
                <div>
                    <label htmlFor="preco"><strong>Preço do Perfume:</strong></label>
                    <input type="text" name="preco" onChange={handlePreco} />
                </div>
                <div>
                    <label htmlFor="imagem"><strong>URL da Imagem do Perfume:</strong></label>
                    <input type="text" name="imagem" onChange={handleImagem}/>
                </div>
                <div>
                    <input className="botao" type="submit" value="Criar um Perfume"/>
                </div>
                </div>
            </form>


        </div>
    </>
    )
}
export default CadastroPerfume;
