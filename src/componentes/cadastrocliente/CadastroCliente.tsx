import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

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
            <h1> Cadastro do Cliente:</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">id</label>
                    <input type="text" name="id" onChange={handleId} />
                </div>
                <div>

                    <label htmlFor="nome">Seu nome:</label>
                    <input type="text" name="nome" onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="sobrenome">Seu sobrenome:</label>
                    <input type="text" name="sobrenome" onChange={handleSobrenome} />
                </div>
                <div>
                    <label htmlFor="idade">Sua idade:</label>
                    <input type="text" name="idade" onChange={handleIdade} />
                </div>
                <div>
                    <label htmlFor="email">Seu email:</label>
                    <input type="text" name="email" onChange={handleEmail} />
                </div>
                <div>
                    
                    <input type="submit" value="Cadastrar Cliente"/>


                    
                </div>
               
            </form>


            <a href="/">
                    <button> Voltar para o início</button>
                </a>
                
        </>
    )
}

export default CadastroCliente;
