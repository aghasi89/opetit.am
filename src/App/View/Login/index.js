
import "./LoginPage.css"
import LinkeDin from "./icons/LinkeDin.png"
import Twitter from "./icons/Twitter.png"
import facebook from "./icons/facebook.png"
import hook from "./hook"

export default () => {
    const{register,handleSubmit,onSubmit,errors}=hook()
    return (
        <div className="loginPageContenier">
            <div className="loginPage d-flex justify-content-center align-items-center">
                <div className="loginContenier d-flex flex-column  justify-content-center" >
                    <div className="loginPageHeader d-flex justify-content-center align-items-center"><span>welcome to</span></div>
                    <div className="loginPageIconandPhoto d-flex justify-content-center align-items-center">
                        <div>33</div><h1>photo</h1>
                    </div>
                    <div className="loginPageText d-flex justify-content-center align-items-center">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore.</span>
                    </div>
                    <div className="loginPageForm d-flex flex-column justify-content-between " >
                        <form className="d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Username" {...register ("username",{required:true}) } />
                            {errors.username&&<div style={{color:"red",fontSize:"12px"}}>this column is required</div>}
                            <input type="password" placeholder="Password" {...register("password",{required:true})}/>
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
                            <div></div>
                        </div>
                </div>
            </div>
            <div className="loginPagePhoto">
                <div className="loginPageBackground d-flex flex-column  justify-content-center">
                    <div className="loginPageSignup">
                        <div className="loginPageLine"></div>
                        <div className=" d-flex  justify-content-center align-items-center" >
                            <div style={{ color: "white" }}>88</div>
                            <h1 style={{ color: "white" }}>photo</h1>
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