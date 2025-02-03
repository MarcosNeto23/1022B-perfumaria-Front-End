import { useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


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
                navigate("/")
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
                  <li><Link to={"/cadastro-perfume"}>Cadastre um perfume</Link></li>
                  <li><Link to={"/cadastro-cliente"}>Cadastrar um cliente</Link></li>
        
                  </ul>
            </div>
            </header>


            <main>
                <div>Alterar Cliente de id: {id}</div>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id">id</label>
                        <input type="text" name="id" value={id} readOnly />
                    </div>
                    <div>
                    <label htmlFor="nome">Seu nome:</label>
                        <input type="text" name="nome" value={nome} onChange={handleNome} />
                    </div>
                    <div>
                    <label htmlFor="sobrenome">Seu sobrenome:</label>
                        <input type="text" name="marca" value={sobrenome} onChange={handleSobrenome} />
                    </div>
                    <div>
                    <label htmlFor="idade">Sua idade:</label>
                        <input type="text" name="fragrancia" value={idade} onChange={handleIdade} />
                    </div>
                    <div>
                    <label htmlFor="email">Seu email:</label>
                        <input type="text" name="volume" value={email} onChange={handleEmail} />
                    </div>
                   
                  
                    <div>
                        <input type="submit" value="Confirmar" />
                    </div>
                </form>
            </main>
        </>
    )
}

export default AlterarCliente;