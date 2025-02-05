import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    return (
        <>
            <nav className='navBar'>
                <div className='logo-container'>
                    <img src='/assets/galinha.png' alt='logo_vitoria' />
                    <h1>NaVi</h1>
                </div>
                <div className='link-container'>
                    <Link
                        to="/"
                        className={`link ${location.pathname === '/' ? 'link--active' : ''}`}
                    >
                        Login</Link>
                    <Link
                        to="/register"
                        className={`link ${location.pathname === '/register' ? 'link--active' : ''}`}
                    >
                        Cadastro</Link>
                </div>

            </nav>
        </>
    )
}

export default Header;