import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import './CadastroCliente.css'

function CadastroCliente(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome,setNome] = useState("")
    const [sobrenome,setSobrenome] = useState("")
    const [idade,setIdade] = useState("")
    const [email,setEmail] = useState("")


    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar um novo cliente !!!");
        const cliente = {
            id: id,
            nome: nome,
            sobrenome: sobrenome,
            idade: idade,
            email: email,
        }
        fetch("https://one022b-perfumaria.onrender.com/clientes",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        }).then(response => {
            if(response.status === 200){
                alert(" Cliente foi cadastrado !!!")
                navigate("/lista-cliente")
            }
            else{
                alert("Erro ao cadastrar Cliente")
            }
        })
    }
    function handleId(event:ChangeEvent<HTMLInputElement>){
        setId(event.target.value)
    }
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
   
    function handleSobrenome(event:ChangeEvent<HTMLInputElement>){
        setSobrenome(event.target.value)
    }
   
    function handleIdade(event:ChangeEvent<HTMLInputElement>){
        setIdade(event.target.value)
    }
   
    function handleEmail(event:ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
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

            <div className="tela-cliente">

            <h1> Cadastro do Cliente:</h1>
            <form className="cliente-cadastro" onSubmit={handleForm}>
                <div className="container-cadastro-cliente">

                <div>
                    <label htmlFor="id"><strong>Crie um ID:</strong></label>
                    <input type="text" name="id" onChange={handleId} />
                </div>
                <div>

                    <label htmlFor="nome"><strong>Insira seu Nome:</strong></label>
                    <input type="text" name="nome" onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="sobrenome"><strong>Insira seu Sobrenome:</strong></label>
                    <input type="text" name="sobrenome" onChange={handleSobrenome} />
                </div>
                <div>
                    <label htmlFor="idade"><strong>Insira sua Idade</strong></label>
                    <input type="text" name="idade" onChange={handleIdade} />
                </div>
                <div>
                    <label htmlFor="email"><strong>Insira seu Email:</strong></label>
                    <input type="text" name="email" onChange={handleEmail} />
                </div>
                <div>
                    
                    <input className="botao-cliente" type="submit" value="Finalizar Cadastro"/>

                    </div>
               
                    </div>
            </form>


           


               </div> 

        </>
    )
}

export default CadastroCliente;
