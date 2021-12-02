import * as React from 'react';
//COMPONENTS

import TextComponent from '../../components/Text';
import ButtonComponent from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import LoaderComponent from 'react-fullpage-custom-loader'
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
        handleSubmitCode,
        registerCode,
        errorsCode
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
                                    button_style="outline"
                                    link="/login"
                                    title="Sign in"
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
                                {loading && <LoaderComponent sentences loaderType="square-jelly-box" wrapperBackgroundColor="rgba(192,192,192,0.3)" />}
                                <form onSubmit={handleSubmit(onSubmitRegData)}>
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
                                            button_style="button"
                                            onPress={handleClick}
                                            title="Sign Up"
                                            type="submit"
                                            color="green"
                                        />
                                    </div>
                                </form>

                                <Modal onClose={() => setIsOpen(false)}
                                    modalIsOpen={modalIsOpen}
                                    body={
                                        <>
                                            <form onSubmit={handleSubmitCode(onSubmitRegCode)}>
                                                <div className='modal-content d-flex justify-content-center align-items-center' >
                                                    <div className='modal-header'>
                                                        <TextComponent type="p" className='modal-title' title="Confirm code field" />
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <Input type="number"
                                                            placeholder="Confirm code"
                                                            inputStyle="input-outlined"
                                                            label="confirm_code"
                                                            register={registerCode} />
                                                    </div>
                                                    <div className="input-error">
                                                        {errorsCode?.confirm_code?.message}
                                                    </div>
                                                    <div className='modal-footer'>
                                                        <div className="sing_up_btn">
                                                            <ButtonComponent
                                                                button_style="button"
                                                                onPress={handleClick}
                                                                title="Sign Up"
                                                                type="submit"
                                                                color="green"
                                                            />
                                                        </div>
                                                    </div>
                                                    {loading && <LoaderComponent sentences loaderType="square-jelly-box" wrapperBackgroundColor="rgba(192,192,192,0.3)" />}
                                                </div>
                                            </form>
                                            <form onSubmit={handleSubmit(onSubmitRegData)}>
                                                <div className="send_code_again_btn">
                                                    <button type="submit">Send code again</button>
                                                </div>
                                            </form>
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
