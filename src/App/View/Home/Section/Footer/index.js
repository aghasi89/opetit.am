import "./footer.css"
import facebookIcone from './Icons/facebook.png'
import LinkeDinIcone from "./Icons/LinkeDin.png"
import TwitterIcone from "./Icons/Twitter.png"
import InstagramIcone from "./Icons/Instagram.png"
export default () => {
    return (
        <div className="footerContenier">
            <div className="footerMenu">
                <div className="footerLink"><h6>Mobile app</h6></div>
                <div className="footerLink"><h6>Community</h6></div>
                <div className="footerLink"><h6>Company</h6></div>
                <div className="footerLink d-flex flex-direction-column">
                    <div className="footerFhoto">88</div>
                    <div><h4>photo</h4></div>
                </div>
                <div className="footerLink"><h6>Help desk</h6></div>
                <div className="footerLink"><h6>Blog</h6></div>
                <div className="footerLink"><h6>Resources</h6></div>
            </div>
            <div className="inlineDiv"></div>
            <div className="footerSocialNetworks">
                <div className="footerSocialNetworksIcons">
                    <div className="footerIcons"><img src={LinkeDinIcone} /></div>
                    <div className="footerIcons"><img src={TwitterIcone} /></div>
                    <div className="footerIcons"><img src={facebookIcone} /></div>
                    <div className="footerIcons"><img src={InstagramIcone} /></div>
                </div>
                <div className="footerText">
                    <span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
            </div>
        </div>
    )
}