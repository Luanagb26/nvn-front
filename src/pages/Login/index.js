import Banner from '../../components/Banner';
import Form from '../../components/Form';
import { login } from '../../api/auth';
import { statusCodes } from '../../api/status-codes';
import './Login.css';

export default function Login() {

    const onSubmit = async (event) => {
        event.preventDefault();

        const response = await login(event.target[0].value, event.target[1].value);
        console.log(event.target[0].value, event.target[1].value)
        const data = await response.json();
        console.log(response)

        switch (response.status) {
            case statusCodes.OK:
                alert(data.message);
                localStorage.setItem('token', data.access_token);
                window.location.href = '/home';
                break;
            case statusCodes.UNAUTHORIZED:
                alert(data.message);
                break;
            default:
                alert(data.message);
                break;
        }
    }

    console.log("entrou")

    return (
        <main>
            <Banner/>
            <Form
                titulo='Login'
                funcao='Entrar'
                linkAlternativo='/register'
                textoLink='Não tem uma conta? Cadastre-se'
                campos={[
                    { nome: "CPF", type: "CPF" },
                    { nome: "Senha", type: "password" },
                ]}
                onSubmit={onSubmit}
            />
            
        </main>

    )
}