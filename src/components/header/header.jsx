import '../header/header.css';
import Logo from '../../assets/img/png/Logo.png';
import ButtonComponent from '../Button/ButtonComponent';
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
                        <ButtonComponent
                            type="button"
                            link="/login"
                            content="Log in"
                            className="btn_login"
                        />
                        <ButtonComponent
                            type="button"
                            link="/signup"
                            content="Register"
                            className="btn_login btn_reg"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
