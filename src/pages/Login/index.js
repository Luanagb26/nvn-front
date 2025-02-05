import Form from '../../components/Form';

export default function Login() {
    return (
        <div>
            <Form
                titulo='Login'
                funcao='Entrar'
                linkAlternativo='/register'
                textoLink='Não tem uma conta? Cadastre-se'
                campos={[
                    { nome: "Email", type: "email" },
                    { nome: "Senha", type: "password" },
                ]}
            />
        </div>

    )
}