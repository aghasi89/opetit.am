

import "./LoginPage.css"
import LinkeDin from "../../../assets/img/LinkeDin.png"
import Twitter from "../../../assets/img/Twitter.png"
import facebook from "../../../assets/img/facebook.png"
import Instagram from "../../../assets/img/Instagram.png"
import SampleLogo from "../../../assets/img/SampleLogo.png"
import SampleLogo1 from "../../../assets/img/SampleLogo1.png"
import Input from "../../components/Input/index"
import hook from "./hook"
import TextComponent from "../../components/Text"
import ButtonComponent from "../../components/Button"
import LoaderComponent from 'react-fullpage-custom-loader'
export default () => {
   
    const { register, handleSubmit, onSubmit, errors, errorMassage ,loading} = hook()
    return (
        <div className="loginPageContenier">
             {loading&&<LoaderComponent sentences loaderType="square-jelly-box" wrapperBackgroundColor="rgba(192,192,192,0.3)" />}
            <div className="loginPage d-flex justify-content-center align-items-center">
                <div className="loginContenier d-flex flex-column  justify-content-center" >
                    <div className="loginPageHeader d-flex justify-content-center align-items-center">
                        <TextComponent
                            type="h4"
                            title="Welcome to"
                            color="light"
                        />
                    </div>
                    <div className="loginPageIconandPhoto d-flex justify-content-center align-items-center">
                        <div className="loginPageLogo"><img className="img" src={SampleLogo}  /></div>
                    </div>
                    <div className="loginPageText d-flex justify-content-center align-items-center">
                        <TextComponent
                            type="span"
                            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore"
                            color="secondary"
                        />
                    </div>
                    <div className="loginPageFormConteiner d-flex flex-column justify-content-between " >
                        {errorMassage && <div className="errorMassage" style={{ color: "red", fontSize: "12px" }}>{errorMassage}</div>}
                        <form className="loginForm d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                inputStyle="input-outlined"
                                label="username"
                                type="text"
                                placeholder="Username"
                                register={register}
                              
                            />
                               
                            {errors.username?.message && <div className="errorsMessageConteiner">{errors.username.message}</div>}

                            <Input
                                inputStyle="input-outlined"
                                type="password"
                                label="password"
                                placeholder="Password"
                                register={register}
                              
                            />

                            {errors?.password?.message && <div className="errorsMessageConteiner">{errors.password.message}</div>}

                            <div className="loginPageLink">
                                <TextComponent
                                    type="link"
                                    title="Fargat your password?"
                                    onPress
                                    color="secondary"
                                />
                            </div>
                            <div className="buttonComponentConteiner">
                            <ButtonComponent
                                button_style="button"
                                title="Sign in"
                                color="primary"
                                type="submit"
                                onPress

                            />
                            </div>
                        </form>


                    </div>
                    <div className="socialMedia d-flex justify-content-center align-items-center">
                        <div>

                            <TextComponent
                                type="span"
                                title="continue with social media"
                                color="secondary"
                            />
                        </div>
                    </div>
                    <div className="loginPageIcons d-flex justify-content-between align-items-center ">
                        <div><img src={LinkeDin} /></div>
                        <div><img src={Twitter} /></div>
                        <div><img src={facebook} /></div>
                        <div><img src={Instagram} /></div>
                    </div>
                </div>
            </div>
            <div className="loginPagePhoto">
                <div className="loginPageBackground d-flex flex-column  justify-content-center">
                    <div className="loginPageSignup">
                        <div className="loginPageLine"></div>
                        <div className=" d-flex  justify-content-center align-items-center" >
                            <div className="loginPageSignupIcone"><img src={SampleLogo1}></img></div>

                        </div>
                        <div className="loginSignupText">
                            <TextComponent
                                type="span"
                                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore"
                                color="white"
                            />
                        </div>
                        <div className="signUpButtonConteiner">
                            <div className="buttonComponentConteiner">
                            <ButtonComponent
                                button_style="outline"
                                title="Sign up"
                                type="submit"
                                onPress

                            />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )


}

