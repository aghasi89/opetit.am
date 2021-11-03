//COMPONENTS
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

//CSS
import '../login/login.css';

//PICTURE
import Logo from '../../assets/img/svg/Logo.svg';
import instagram from '../../assets/img/svg/instagram.svg';
import fb from '../../assets/img/svg/fb.svg';
import twiter from '../../assets/img/svg/twiter.svg';
import linkedin from '../../assets/img/svg/linkedin.svg';

const Login = () => {
    let login, password;
    const handleInput = (event) => {
        login = event.target.value;
        password = event.target.value;
    };
    useEffect(() => {
        console.log('Login', login, 'Password', password);
    });
    return (
        <section className="login_about">
            <div className="container">
                <div className="d_flex">
                    <div className="login_form signin_form">
                        <h4 className="login_form_h4">Welcome to</h4>
                        <div className="login_form_logo_block">
                            <img
                                src={Logo}
                                alt="login_logo"
                                className="login_form_img"
                            />
                            <h1 className="login_logo_h1 login_form_h1">
                                photo
                            </h1>
                        </div>
                        <p className="login_form_p signin_form_p">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been{' '}
                        </p>
                        <div className="login_inputs">
                            <input
                                onChange={(event) => handleInput(event)}
                                className="username_inputs"
                                placeholder="User Name"
                            />
                            <input
                                onChange={(event) => handleInput(event)}
                                className="username_inputs password_inputs"
                                placeholder="Password"
                            />
                        </div>
                        <Link to="" className="login_form_link">
                            Forgat your password?
                        </Link>
                        <div className="submit_btn">
                            <a href="/#" alt="login">
                                Sign In
                            </a>
                        </div>
                        <div className="logo_block">
                            <p className="logo_p">continue with social media</p>
                            <div className="logo_img">
                                <img src={linkedin} alt="linkedin" />
                                <img src={twiter} alt="twiter" />
                                <img src={fb} alt="fb" />
                                <img src={instagram} alt="instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="login_logo_block">
                            <img src={Logo} alt="login_logo" />
                            <h1 className="login_logo_h1">photo</h1>
                        </div>
                        <div>
                            <p className="login_about_p">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make specimen book.
                                It has survived
                            </p>
                            <div className="login_btn_block">
                                <Link to="/signup" className="login_btn">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
