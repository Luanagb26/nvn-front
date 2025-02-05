import Form from "../../components/Form";

export default function Register() {
    return (
        <div>
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
        </div>
    )
}