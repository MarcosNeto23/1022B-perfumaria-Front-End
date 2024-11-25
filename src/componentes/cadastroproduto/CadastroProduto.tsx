import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroPerfume(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome,setNome] = useState("")
    const [marca,setMarca] = useState("")
    const [fragancia,setFragancia] = useState("")
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
            fragancia: fragancia,
            volume: volume,
            preco: preco,
            imagem: imagem
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
    function handleFragancia(event:ChangeEvent<HTMLInputElement>){
        setFragancia(event.target.value)
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
            <h1>Tela de Cadastro Perfumes</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">id</label>
                    <input type="text" name="id" onChange={handleId} />
                </div>
                <div>
                    <label htmlFor="nome">nome</label>
                    <input type="text" name="nome" onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="marca">marca</label>
                    <input type="text" name="marca" onChange={handleMarca} />
                </div>
                <div>
                    <label htmlFor="fragancia">fragancia</label>
                    <input type="text" name="fragancia" onChange={handleFragancia} />
                </div>
                <div>
                    <label htmlFor="volume">volume</label>
                    <input type="text" name="volume" onChange={handleVolume} />
                </div>
                <div>
                    <label htmlFor="preco">preço</label>
                    <input type="text" name="preco" onChange={handlePreco} />
                </div>
                <div>
                    <label htmlFor="imagem">imagem</label>
                    <input type="text" name="imagem" onChange={handleImagem}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}