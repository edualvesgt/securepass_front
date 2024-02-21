import Container from '../Container/Container.js'; // Importa o componente Container

import './Header.css'; // Importa o arquivo de estilos CSS para o componente Header

import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    // Define o componente Header

    // Define o estado local 'exibeNavbar' e a função 'setExibeNavbar' com o valor inicial 'false'
    // Esse estado controla se o menu de navegação está sendo exibido ou oculto

    return (
        <header className="headerpage">

            <Container>
                <nav className='navbar'>
                    <div className="logo">
                        <img
                            className='logo-image'
                            src={logo}
                            alt="Logo Secure Pass"
                        />
                    </div>
                    <div className="itens-nav">
                        <Link className='navbar__item' to="/cadastro">Cadastro</Link>
                        <Link className='navbar__item' to="/perfil">Perfil</Link>
                        <Link className='navbar__item' to="/logs">Acessos</Link>
                        <Link className='navbar__item' to="/logout">LogOut </Link>
                    </div>
                </nav>

            </Container>
        </header>
    );
};

export default Header;