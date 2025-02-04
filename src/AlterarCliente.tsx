import { useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import './AlterarCliente.css'




function AlterarCliente() {
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://one022b-perfumaria.onrender.com/clientes/${id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setNome(dados.nome)
                setSobrenome(dados.sobrenome)
                setIdade(dados.idade)
                setEmail(dados.email)
            })
    }, [])
    const navigate = useNavigate();
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [idade, setIdade] = useState("")
    const [email, setEmail] = useState("")
  

    function handleForm(event: FormEvent) {
        event.preventDefault();
        console.log("Tentei alterar uma informação do cliente!!!");
        const perfume = {
            id: id,
            nome: nome,
            sobrenome: sobrenome,
            idade: idade,
            email: email,

        }
        fetch(`https://one022b-perfumaria.onrender.com/clientes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(perfume)
        }).then(response => {
            if (response.status === 200) {
                alert("Informação do cliente alterado com sucesso")
                navigate("/lista-cliente")
            }
            else {
                alert("Erro ao alterar as informações do cliente.")
            }
        })
    }
   
    function handleSobrenome(event: ChangeEvent<HTMLInputElement>) {
        setSobrenome(event.target.value)
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function handleIdade(event: ChangeEvent<HTMLInputElement>) {
        setIdade(event.target.value)
    }
    function handleEmail(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }
    

    return (
        <>
        <header>
              <div className="cabeçalho-app">
                  <ul className='menu-app'>
                  <li><Link to={"/"}>Início</Link></li>
                  <li><Link to={"/lista-cliente"}>Veja nossos clientes</Link></li>
                  <li><Link to={"/cadastro-perfume"}> Cadastrar um Perfume</Link></li>
                  <li ><Link to={"/cadastro-cliente"}> Cadastrar um Cliente</Link></li>
                  </ul>
        
                  
            </div>
            </header>


            <main>
                <div><h1>Alterar Informações do Cliente <em>n.º{id}:</em></h1></div>
                <form className="form-alterar" onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id"><strong>ID Oficial:</strong></label>
                        <input type="text" name="id" value={id} readOnly />
                    </div>
                    <div>
                    <label htmlFor="nome"><strong>Nome do cliente:</strong></label>
                        <input type="text" name="nome" value={nome} onChange={handleNome} />
                    </div>
                    <div>
                    <label htmlFor="sobrenome"><strong>Sobrenome do cliente:</strong></label>
                        <input type="text" name="sobrenome" value={sobrenome} onChange={handleSobrenome} />
                    </div>
                    <div>
                    <label htmlFor="idade"><strong>Idade do cliente:</strong></label>
                        <input type="text" name="idade" value={idade} onChange={handleIdade} />
                    </div>
                    <div>
                    <label htmlFor="email"><strong>Email do cliente:</strong></label>
                        <input type="text" name="email" value={email} onChange={handleEmail} />
                    </div>
                   
                  
                    <div>
                        <input className="confirmar" type="submit" value="Confirmar" />
                    </div>
                </form>
            </main>
        </>
    )
}

export default AlterarCliente;