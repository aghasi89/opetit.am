//COMPONENTS
import TextComponent from '../../components/Text';
import ButtonComponent from '../../components/Button';
import Input from '../../components/Input/';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

//CSS
import './registratin.css';

//PICTURE
import Logo from '../../assets/img/svg/Logo.svg';
import instagram from '../../assets/img/svg/instagram.svg';
import fb from '../../assets/img/svg/fb.svg';
import twiter from '../../assets/img/svg/twiter.svg';
import linkedin from '../../assets/img/svg/linkedin.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../../context';

const Register = () => {
    const theme = useContext(ThemeContext);
    // const dispatch = useDispatch();
    // const [state, setState] = useState({
    //     role_code: 'CL',
    // });

    // const handleChangeInput = ({ target }) => {
    //     const { name, value } = target;
    //     setState({
    //         ...state,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = () => {
    //     dispatch(userRegistration(state));
    // };

    const handleClick = () => {
        console.log('click');
    };

    return (
        <section className="signup_about">
            <div className="">
                <div className="signup_wrapper">
                    <div className="signup_container">
                        <div className="block_1">
                            <div className="signup_logo_block">
                                <img src={Logo} alt="signup_logo" />
                                <div>Photo</div>
                            </div>
                            <TextComponent
                                type="baisic_text"
                                title="Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make specimen book. It has survived"
                                style={{ color: 'white' }}
                            />
                            <div className="signup_btn_block">
                                <ButtonComponent
                                    link="/login"
                                    title="Sign in"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="signup_form ">
                        <div className="block_2">
                            <TextComponent type="p" title="Welcome to" />

                            <div className="signup_form_block">
                                <img
                                    src={Logo}
                                    alt="signup_logo"
                                    className="signup_form_img"
                                />
                                <TextComponent type="h1" title="photo" />
                            </div>
                            <TextComponent
                                type="baisic_text"
                                color='lite_white'
                                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
                            />
                            <div className="signup_inputs">
                                {
                                    <Input
                                        inputstyle="input-outlined"
                                        placeholder="Firstname"
                                    />
                                }
                                {
                                    <Input
                                        inputstyle="input-outlined"
                                        placeholder="Lastname"
                                    />
                                }
                                {
                                    <Input
                                        inputstyle="input-outlined"
                                        placeholder="Password"
                                    />
                                }
                                {
                                    <Input
                                        inputstyle="input-outlined"
                                        placeholder="Confirm password"
                                    />
                                }
                                {
                                    <Input
                                        inputstyle="input-outlined"
                                        placeholder="Phone number "
                                    />
                                }
                            </div>
                            <div className="sing_up_btn">
                                <ButtonComponent
                                    onPress={handleClick}
                                    title="Sign Up"
                                    type="submit_button"
                                    style={{
                                        background: theme.color.submit_btn,
                                    }}
                                />
                            </div>
                            <div className="signup_block">
                                <TextComponent
                                    type="p"
                                    title="continue with social media"
                                />
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
            </div>
        </section>
    );
};

export default Register;
