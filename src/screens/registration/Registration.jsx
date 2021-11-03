//COMPONENTS
import { Link } from 'react-router-dom';

//CSS
import '../registration/registration.css';

//PICTURE
import Logo from '../../assets/img/svg/Logo.svg';
import instagram from '../../assets/img/svg/instagram.svg';
import fb from '../../assets/img/svg/fb.svg';
import twiter from '../../assets/img/svg/twiter.svg';
import linkedin from '../../assets/img/svg/linkedin.svg';

const inputsPlaceHoldere = [
    'First Name',
    'Last Name',
    'Password',
    'Confirm Password',
    'Phone Number',
];

const Login = () => {
    const inputJSX = inputsPlaceHoldere.map((item, indx) => {
        return (
            <div key={indx}>
                <input className="username_inputs " placeholder={`${item}`} />
            </div>
        );
    });
    return (
        <section className="signup_about">
            <div className="container">
                <div className="d_flex">
                    <div className="signup_form">
                        <div className="signup_logo_block">
                            <img src={Logo} alt="signup_logo" />
                            <h1 className="signup_logo_h1">photo</h1>
                        </div>
                        <div>
                            <p className="signup_about_p">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make specimen book.
                                It has survived
                            </p>
                            <div className="signup_btn_block">
                                <Link to="/login" className="signup_btn">
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="signup_form ">
                        <h4 className="signup_h4">Welcome to</h4>
                        <div className="signup_form_block">
                            <img
                                src={Logo}
                                alt="signup_logo"
                                className="signup_form_img"
                            />
                            <h1 className="login_form_h1">photo</h1>
                        </div>
                        <p className="signup_form_p">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been{' '}
                        </p>
                        <div className="signup_inputs">{inputJSX}</div>
                        <div className="signup_form_btn">
                            <a
                                href="/#"
                                alt="login"
                                className="signup_form_btn_a"
                            >
                                Sign Up
                            </a>
                        </div>
                        <div className="signup_block">
                            <p className="sigup_block_p">
                                continue with social media
                            </p>
                            <div className="signup_logo_img">
                                <img src={linkedin} alt="linkedin" />
                                <img src={twiter} alt="twiter" />
                                <img src={fb} alt="fb" />
                                <img src={instagram} alt="instagram" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
