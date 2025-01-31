import { useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import './AlterarPerfume.css'

function AlterarPerfume() {
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:8000/produtos/${id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setDescricao(dados.descricao)
                setNome(dados.nome)
                setMarca(dados.marca)
                setFragancia(dados.fragancia)
                setVolume(dados.volume)
                setPreco(dados.preco)
                setImagem(dados.imagem)
            })
    }, [])
    const navigate = useNavigate();
    const [descricao, setDescricao] = useState("")
    const [nome, setNome] = useState("")
    const [marca, setMarca] = useState("")
    const [fragancia, setFragancia] = useState("")
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
            fragancia: fragancia,
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
                alert("Erro ao alterar perfume")
            }
        })
    }
    function handleDescricao(event: ChangeEvent<HTMLInputElement>) {
        setDescricao(event.target.value)
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
    function handleFragancia(event: ChangeEvent<HTMLInputElement>) {
        setFragancia(event.target.value)
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


            <main className="formulario-alterar">
                <div>Alterar Produto {id}</div>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id">id</label>
                        <input type="text" name="id" value={id} readOnly />
                    </div>
                    <div>
                        <label htmlFor="nome">nome</label>
                        <input type="text" name="nome" value={nome} onChange={handleNome} />
                    </div>
                    <div>
                        <label htmlFor="marca">marca</label>
                        <input type="text" name="marca" value={marca} onChange={handleMarca} />
                    </div>
                    <div>
                        <label htmlFor="fragancia">fragancia</label>
                        <input type="text" name="fragancia" value={fragancia} onChange={handleFragancia} />
                    </div>
                    <div>
                        <label htmlFor="volume">volume</label>
                        <input type="text" name="volume" value={volume} onChange={handleVolume} />
                    </div>
                    <div>
                        <label htmlFor="descricao">descricao</label>
                        <input type="text" name="descricao" value={descricao} onChange={handleDescricao} />
                    </div>
                    <div>
                        <label htmlFor="preco">preço</label>
                        <input type="text" name="preco" value={preco} onChange={handlePreco} />
                    </div>
                    <div>
                        <label htmlFor="imagem">imagem</label>
                        <input type="text" name="imagem" value={imagem} onChange={handleImagem} />
                        {imagem && <img className="imagem-previa-upload" src={imagem} />}
                    </div>
                    <div>
                        <input type="submit" value="Alterar" />
                    </div>
                </form>
            </main>
        </>
    )
}

export default AlterarPerfume;