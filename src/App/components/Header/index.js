<<<<<<< HEAD
import "./style.css"
import logo from "./Sample Logo.png"
import { ButtonComponent, TextComponent } from "..";

export default function Header() {

    return (
        <div className="header d-flex justify-content-center align-items-center">
            <div className="wrapper d-flex justify-content-between align-items-center">
                <div className="nav d-flex  flex-nowrap align-items-center">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="navbar d-flex align-items-center">
                        <div className="navbar_links">
                            <TextComponent type="link" link="/about" color="charcoal" title="About us" />
                        </div>
                        <div className="navbar_links">
                            <TextComponent type="link" link="/boxes" color="charcoal" title="Boxes" />
                        </div>
                        <div className="navbar_links">
                            <TextComponent type="link" link="/servicest" color="charcoal" title="Services" />
                        </div>
                        <div className="navbar_links">
                            <TextComponent type="link" link="/contactus" color="charcoal" title="Contact us" />
                        </div>

                    </div>
                </div>
                <div className="login-buttons d-flex justify-content-between">
                    <div className="log_in_btn">
                        <ButtonComponent
                            button_style="outline"
                            link="/login"
                            title="Log in"
                            borderColor="green"
                            title_color="green"
                        />
                    </div>
                    <div className="log_in_btn">
                        <ButtonComponent
                            button_style="button"
                            link="/registration"
                            title="Register"
                            color="green"
                            borderColor="green"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
=======
import Header from "./Header";
export default Header

>>>>>>> dev
