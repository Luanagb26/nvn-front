import Input from '../Input';
import Button from '../Button';
import './Form.css';
import { Link } from 'react-router-dom';


const Form = ({ titulo, funcao, linkAlternativo, textoLink, campos, onSubmit }) => {
    return (
        <form className='form' onSubmit={onSubmit}>
            <h1 className='form-titulo'>{titulo}</h1>
            <div className='campo-container'>
                {campos.map((campo, index) => (
                    <Input key={index} type={campo.type}>{campo.nome}</Input>
                ))}

            </div>

            <div className='button-container'>
                <Button type="submit">{funcao}</Button>
                <Link to={linkAlternativo} className='link-alternativo'>{textoLink}</Link>
            </div>
        </form>
    )
}

export default Form;