import './style.css';
import logo from './Sample Logo.png';

export default function Header() {
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
                    <button>Log in</button>
                    <button>Register</button>
                </div>
            </div>
        </div>
    );
}
