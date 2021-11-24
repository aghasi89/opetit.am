import * as React from 'react';
//COMPONENTS
import TextComponent from '../../components/Text';
import ButtonComponent from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import MyComponent from 'react-fullpage-custom-loader'
import RegisterHook from './RegisterHook';
//CSS
import "./style.css"

//PICTURE
import instagram from '../../assets/img/svg/instagram.svg';
import fb from '../../assets/img/svg/fb.svg';
import twiter from '../../assets/img/svg/twiter.svg';
import linkedin from '../../assets/img/svg/linkedin.svg';
import Logo from '../../components/Header/Sample Logo.png';

const Registration = () => {
    const { register,
        handleSubmit,
        errors,
        loading,
        onSubmitRegData,
        onSubmitRegCode,
        modalIsOpen,
        setIsOpen,
        register2,
        errors2,
        handleSubmit2
    } = RegisterHook()

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
                            </div>
                            <TextComponent
                                type="p"
                                title="Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make specimen book. It has survived"
                                color="white"
                            />
                            <div className="signup_btn_block big_btn">
                                <ButtonComponent
                                    type="outline"
                                    link="/login"
                                    title="Sign in"
                                    type="outline"
                                    borderColor="white"
                                    title_color="white"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="background"></div>
                    <div className="signup_form ">
                        <div className="block_2">
                            <div className="block_2_logo_text">
                                <TextComponent
                                    type="p"
                                    title="Welcome to"
                                    color="light_gray"
                                />
                            </div>
                            <div className="signup_form_logo">
                                <img src={Logo} alt="signup_logo" />
                            </div>
                            <div>
                                <TextComponent
                                    type="p"
                                    color="gray"
                                    title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
                                />
                            </div>
                            <div className="signup_inputs">
                                    {/* {loading && <MyComponent sentences loaderType="pacman" wrapperBackgroundColor="rgba(192,192,192,0.5)" className="loader" />} */}
                                    <form key={1} onSubmit={handleSubmit(onSubmitRegData)}>
                                        <Input type="text"
                                            placeholder="Firstname"
                                            inputStyle="input-outlined"
                                            label="first_name"
                                            register={register}
                                        />
                                        <div className="input-error">
                                            {errors.first_name?.message}
                                        </div>

                                        <Input type="text"
                                            placeholder="Lastname"
                                            inputStyle="input-outlined"
                                            label="last_name"
                                            register={register}
                                        />
                                        <div className="input-error">
                                            {errors.last_name?.message}
                                        </div>

                                        <Input type="password"
                                            placeholder="Password"
                                            inputStyle="input-outlined"
                                            label="password"
                                            register={register}
                                        />
                                        <div className="input-error">
                                            {errors.password?.message}
                                        </div>

                                        <Input type="password"
                                            placeholder="Confirm password"
                                            inputStyle="input-outlined"
                                            label="confirm_password"
                                            register={register}
                                        />
                                        <div className="input-error">
                                            {errors.confirm_password?.message}
                                        </div>

                                        <Input type="email" novalidate
                                            placeholder="Email"
                                            inputStyle="input-outlined"
                                            label="email"
                                            register={register}
                                        />
                                        <div className="input-error">
                                            {errors.email?.message}
                                        </div>
                                        <div className="sing_up_btn">
                                            <ButtonComponent
                                                onPress={handleClick}
                                                title="Sign Up"
                                                type="button"
                                                color="green"
                                            />
                                        </div>
                                    </form>
                                    <Modal onClose={() => setIsOpen(false)}
                                        modalIsOpen={modalIsOpen}
                                        body={
                                            <>
                                                <div>
                                                    <form key={2} onSubmit={handleSubmit2(onSubmitRegCode)}>
                                                        <div className='modal-content d-flex justify-content-center align-items-center' >
                                                            <div className='modal-header'>
                                                                <p className='modal-title'>Confirm code field</p>
                                                            </div>
                                                            <div className='modal-body d-flex align-items-center'>
                                                                <Input type="number"
                                                                    placeholder="Confirm code"
                                                                    inputStyle="input-outlined"
                                                                    label="confirm_code"
                                                                    register={register2} />
                                                            </div>
                                                            <div className="input-error">
                                                                {errors2.confirm_code?.message}
                                                            </div>
                                                            <div className='modal-footer'>
                                                                <button type="submit" disabled={loading}>
                                                                    {/* {loading ?
                                                                        <Loading type="spinningBubbles" color="grey" /> : */}
                                                                    <span>Sign up</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div>
                                                    <form key={1} onSubmit={handleSubmit(onSubmitRegData)}>
                                                        <input type="submit" value="Send code again" />
                                                    </form>
                                                </div>
                                                {loading && <MyComponent sentences loaderType="pacman" wrapperBackgroundColor="rgba(192,192,192,0.5)" className="loader" />}
                                            </>
                                        }
                                    />
                            </div>

                            <div className="signup_block">
                                <TextComponent
                                    type="p"
                                    color="gray"
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

export default Registration;
