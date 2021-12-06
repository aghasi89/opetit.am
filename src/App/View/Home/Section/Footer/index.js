import "./footer.css"
import facebookIcone from '../../../../../assets/img/facebook.png'
import LinkeDinIcone from "../../../../../assets/img/LinkeDin.png"
import TwitterIcone from "../../../../../assets/img/Twitter.png"
import InstagramIcone from "../../../../../assets/img/Instagram.png"
import logo from "../../../../../assets/img/SampleLogo.png"
import { TextComponent } from "../../../../components"
export default () => {
    return (
        <div className="footerGeneralContenier d-flex align-items-center justify-content-center">
            <div className="footerContenier">
                <div className="footerMenu">
                    <div className="footerLink">
                        <TextComponent
                            type="h4"
                            title="Mobile app"
                            link="title"

                        />
                    </div>
                    <div className="footerLink">
                        <TextComponent
                            type="h4"
                            title="Community"
                            link="title"
                        />
                    </div>
                    <div className="footerLink">
                        <TextComponent
                            type="h4"
                            title="Company"
                            link="title"
                        />
                    </div>
                    <div className="footerLinkLogo d-flex"><div><img src={logo} /></div></div>
                    <div className="footerLink">
                        <TextComponent
                            type="h4"
                            title="Help desk"
                            link="title"
                        />
                    </div>
                    <div className="footerLink">
                        <TextComponent
                            type="h4"
                            title="Blog"
                            link="title"
                        />
                    </div>
                    <div className="footerLink">
                        <TextComponent
                            type="h4"
                            title="Resources"
                            link="title"
                        />
                    </div>
                </div>
                <div className="inlineDiv"></div>
                <div className="footerSocialNetworks">
                    <div className="footerSocialNetworksIcons">
                        <div className="footerIcons"><img src={LinkeDinIcone} /></div>
                        <div className="footerIcons"><img src={TwitterIcone} /></div>
                        <div className="footerIcons"><img src={facebookIcone} /></div>
                        <div className="footerIcons"><img src={InstagramIcone} /></div>
                    </div>
                </div>
                <div className="footerText">
                    <TextComponent
                        type="p"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    />
                </div>

            </div>
        </div>
    )
}