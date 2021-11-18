import { useContext } from 'react';
import logo from './Sample Logo.png';
import { ButtonComponent } from '..';
import { ThemeContext } from '../../../context/';
import './style.css';

export default function Header() {
    const { small_btn, color } = useContext(ThemeContext);
    return (
        <div className="header d-flex justify-content-center align-items-center">
            <div className="wrapper d-flex justify-content-between align-items-center">
                <div className="nav d-flex  flex-nowrap justify-content-between align-items-center">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navbar d-flex justify-content-between align-items-center">
                        <div>About Us</div>
                        <div>Boxes</div>
                        <div>Services</div>
                        <div>Contact Us</div>
                    </div>
                </div>
                <div className="login-buttons d-flex justify-content-between">
                    <ButtonComponent
                        title="Log in"
                        style={small_btn}
                        onPress={() => {}}
                    />
                    <ButtonComponent
                        title="Register"
                        style={small_btn}
                        onPress={() => {}}
                    />
                    {/* <button>Log in</button>
                    <button>Register</button> */}
                </div>
            </div>
        </div>
    );
}
