import { useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
function AlterarPerfume() {
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://one022b-perfumaria.onrender.com/perfumes/${id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setNome(dados.nome)
                setMarca(dados.marca)
                setFragrancia(dados.fragrancia)
                setVolume(dados.volume)
                setPreco(dados.preco)
                setImagem(dados.imagem)
            })
    }, [])
    const navigate = useNavigate();
    const [nome, setNome] = useState("")
    const [marca, setMarca] = useState("")
    const [fragrancia, setFragrancia] = useState("")
    const [volume, setVolume] = useState("")
    const [preco, setPreco] = useState("")
    const [imagem, setImagem] = useState("")

    function handleForm(event: FormEvent) {
        event.preventDefault();
        console.log("Tentei alterar um perfume");
        const perfume = {
            id: id,
            nome: nome,
            marca: marca,
            fragrancia: fragrancia,
            volume: volume,
            preco: preco,
            imagem: imagem,
        }
        fetch(`https://one022b-perfumaria.onrender.com/perfumes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(perfume)
        }).then(response => {
            if (response.status === 200) {
                alert("Perfume alterado com sucesso")
                navigate("/")
            }
            else {
                alert("Erro ao alterar Perfume")
            }
        })
    }
   
    function handlePreco(event: ChangeEvent<HTMLInputElement>) {
        setPreco(event.target.value)
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function handleMarca(event: ChangeEvent<HTMLInputElement>) {
        setMarca(event.target.value)
    }
    function handleVolume(event: ChangeEvent<HTMLInputElement>) {
        setVolume(event.target.value)
    }
    function handleFragrancia(event: ChangeEvent<HTMLInputElement>) {
        setFragrancia(event.target.value)
    }
    function handleImagem(event: ChangeEvent<HTMLInputElement>) {
        setImagem(event.target.value)
    }

    return (
        <>
        <header>
              <div className="cabeçalho-app">
                  <ul className='menu-app'>
                  <li><Link to={"/"}>Início</Link></li>
                  <li><Link to={"/lista-cliente"}>Veja nossos clientes</Link></li>
                  <li><Link to={"/cadastro-perfume"}>Cadastre um perfume</Link></li>
                  <li><Link to={"/cadastro-cliente"}>Cadastrar um cliente</Link></li>
        
                  </ul>
            </div>
            </header>


            <main>
                <div><h1>Alterar Informações do Perfume <em> n.º{id}:</em></h1></div>
                <form className="form-alterar" onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id"><strong> ID Oficial:</strong></label>
                        <input type="text" name="id" value={id} readOnly />
                    </div>
                    <div>
                        <label htmlFor="nome"><strong>Nome do Perfume:</strong></label>
                        <input type="text" name="nome" value={nome} onChange={handleNome} />
                    </div>
                    <div>
                        <label htmlFor="marca"><strong>Marca do Perfume:</strong></label>
                        <input type="text" name="marca" value={marca} onChange={handleMarca} />
                    </div>
                    <div>
                        <label htmlFor="fragrancia"><strong>Fragrancia do Perfume:</strong></label>
                        <input type="text" name="fragrancia" value={fragrancia} onChange={handleFragrancia} />
                    </div>
                    <div>
                        <label htmlFor="volume"><strong>Volume do Perfume:</strong></label>
                        <input type="text" name="volume" value={volume} onChange={handleVolume} />
                    </div>
                   
                    <div>
                        <label htmlFor="preco"><strong>Preço do Perfume:</strong></label>
                        <input type="text" name="preco" value={preco} onChange={handlePreco} />
                    </div>
                    <div>
                        <label htmlFor="imagem"><strong>URL do Perfume:</strong></label>
                        <input type="text" name="imagem" value={imagem} onChange={handleImagem} />
                        {imagem && <img className="imagem-previa-upload" src={imagem} />}
                    </div>
                    <div>
                        <input className="confirmar" type="submit" value="Alterar Perfume" />
                    </div>
                </form>
            </main>
        </>
    )
}

export default AlterarPerfume;