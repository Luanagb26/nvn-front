import Banner from '../../components/Banner';
import Form from '../../components/Form';
import './Login.css';

export default function Login() {
    return (
        <main>
            <Banner/>
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
        </main>

    )
}