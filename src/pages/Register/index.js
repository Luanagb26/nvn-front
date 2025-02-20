import Banner from "../../components/Banner";
import Form from "../../components/Form";
import { register } from "../../api/auth";
import { statusCodes } from "../../api/status-codes";
import './Register.css'

export default function Register() {

    const onSubmit = async (event) => {
        event.preventDefault();

        if (event.target[3].value !== event.target[4].value) {
            alert('As senhas não coincidem');
            return;
        }

        const response = await register(event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value);
        const data = await response.json();
        
        console.log(response)

        switch (response.status) {
            case statusCodes.CREATED:
                alert(data.message);
                window.location.href = '/';
                break;
            default:
                alert(data.message);
                break;
        } 
    }

    return (
        <main>
            <Banner/>
            <Form
                titulo='Cadastro'
                funcao='Cadastrar-se'
                linkAlternativo="/"
                textoLink="Já tem conta? Entrar"
                campos={[
                    { nome: "Nome", type: "text" },
                    { nome: "Email", type: "text" },
                    { nome: "CPF", type: "CPF" },
                    { nome: "Senha", type: "password" },
                    { nome: "Confirmar Senha", type: "password" }
                ]}
                onSubmit={onSubmit}
            />
        </main>
    )
}