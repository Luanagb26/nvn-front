import Banner from "../../components/Banner";
import Form from "../../components/Form";
import './Register.css'

export default function Register() {
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
                    { nome: "Email", type: "email" },
                    { nome: "Senha", type: "password" },
                    { nome: "Confirmar Senha", type: "password" }
                ]}
            />
        </main>
    )
}