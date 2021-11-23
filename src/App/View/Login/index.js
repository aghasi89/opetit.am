
import "./LoginPage.css"
import LinkeDin from "../../../assets/img/LinkeDin.png"
import Twitter from "../../../assets/img/Twitter.png"
import facebook from "../../../assets/img/facebook.png"
import Instagram from "../../../assets/img/Instagram.png"
import SampleLogo from "../../../assets/img/SampleLogo.png"
import SampleLogo1 from "../../../assets/img/SampleLogo1.png"
import Input from "../../Components/Input/index"
import hook from "./hook"

export default () => {
    const{register,handleSubmit,onSubmit,errors,errorMassage}=hook()
    return (
        <div className="loginPageContenier">
            <div className="loginPage d-flex justify-content-center align-items-center">
                <div className="loginContenier d-flex flex-column  justify-content-center" >
                    <div className="loginPageHeader d-flex justify-content-center align-items-center"><span>welcome to</span></div>
                    <div className="loginPageIconandPhoto d-flex justify-content-center align-items-center">
                        <div style={{width:"150px"}}><img src={SampleLogo}/></div>
                    </div>
                    <div className="loginPageText d-flex justify-content-center align-items-center">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</span>
                    </div>
                    <div className="loginPageFormConteiner d-flex flex-column justify-content-between " >
                        {errorMassage&&<div className="errorMassage" style={{color:"red",fontSize:"12px"}}>{errorMassage}</div>}
                        <form className="loginForm d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
                            <Input 
                            inputStyle="input-outlined" 
                            name="username" 
                            type="text" 
                            placeholder="Username" 
                            register={register} 
                            required
                            pattern={{minLength:4}} 
                            />

                            {errors.username&&errors.username.type==="required"&&<div style={{color:"red",fontSize:"12px"}}>this column is required</div>}
                            {errors.username&&errors.username.type==="minLength"&&<div style={{color:"red",fontSize:"12px"}}>user name must include minimum 4 symbols</div>}
                           

                            <Input 
                            inputStyle="input-outlined" 
                            type="password"
                            name="password" 
                            placeholder="Password"    
                            register={register}
                            required />

                            {errors.password&&<div style={{color:"red",fontSize:"12px"}}>this column is required</div>}

                            <div><span>Fargat your password?</span></div>
                            <button type="submit" className="formButton">Sign in</button>
                        </form>
                        
                        
                    </div>
                    <div className="socialMedia d-flex justify-content-center align-items-center">
                            <div><span>continue with social media</span></div>
                        </div>
                    <div className="loginPageIcons d-flex justify-content-between align-items-center ">
                            <div><img src={LinkeDin} /></div>
                            <div><img src={Twitter} /></div>
                            <div><img src={facebook} /></div>
                            <div><img src={Instagram}/></div>
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
                            <span style={{ color: "white" }}>lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.
                             lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.
                            </span>
                        </div>
                        <div>
                            <button className="loginPageButtton"><span style={{color:"white"}}>sign up</span></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )


}