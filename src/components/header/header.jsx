import '../header/header.css';
import Logo from '../../assets/img/png/Logo.png';
import { Link } from 'react-router-dom';
const menuNamesArr = ['About us', 'Boxes', 'Services', 'Contact us'];

const Header = () => {
    const menuJSX = menuNamesArr.map((elem, indx) => {
        return (
            <li key={indx}>
                <a href="/#">{elem}</a>
            </li>
        );
    });
    return (
        <header className="App-header">
            <div className="container">
                <div className="nav">
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                    <p className="logo">photo</p>
                    <ul className="menu">{menuJSX}</ul>
                    <div className="btn_block">
                        <span>
                            <Link to="/login" className="btn_login">
                                Log in
                            </Link>
                        </span>
                        <span>
                            <Link to="/signup" className="btn_login btn_reg">
                                Register
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
