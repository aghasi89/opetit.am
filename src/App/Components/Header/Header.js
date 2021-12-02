import "./style.css"
import logo from "./Sample Logo.png"
import { ButtonComponent, TextComponent } from "..";
import { getMeSelector } from "../../store/selectors";
import { useSelector } from "react-redux";


export default function Header() {
    const access = localStorage.getItem("access")
    const user = useSelector(getMeSelector);

    return (
        <div className="header d-flex justify-content-center align-items-center">
            <div className="wrapper d-flex justify-content-between align-items-center">
                <div className="nav d-flex  flex-nowrap align-items-center">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navbar d-flex align-items-center">
                        <div className="navbar_links">
                            <TextComponent type="link" link="/about" color="dim_gray" title="About us" />
                        </div>
                        <div className="navbar_links">
                            <TextComponent type="link" link="/boxes" color="dim_gray" title="Boxes" />
                        </div>
                        <div className="navbar_links">
                            <TextComponent type="link" link="/servicest" color="dim_gray" title="Services" />
                        </div>
                        <div className="navbar_links">
                            <TextComponent type="link" link="/contactus" color="dim_gray" title="Contact us" />
                        </div>
                    </div>
                </div>
                <div className="login-buttons d-flex justify-content-between">
                    {access ? <div>{user?.first_name} {user?.last_name}</div> :
                        (
                            <>
                                <div className="log_in_btn">
                                    <ButtonComponent
                                        button_style="outline"
                                        link="/login"
                                        title="Log in"
                                        borderColor="primary"
                                        title_color="primary"
                                    />
                                </div>
                                <div className="log_in_btn">
                                    <ButtonComponent
                                        button_style="button"
                                        link="/registration"
                                        title="Register"
                                        color="primary"
                                        borderColor="primary"
                                    />
                                </div>
                            </>
                        )}
                </div>
            </div>
        </div>
    );
}
