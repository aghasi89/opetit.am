import "./footer.css"
import facebookIcone from './Icons/facebook.png'
import LinkeDinIcone from "./Icons/LinkeDin.png"
import TwitterIcone from "./Icons/Twitter.png"
import InstagramIcone from "./Icons/Instagram.png"
export default () => {
    return (
        <div className="footerContenier">
            <div className="footerMenu">
                <div className="footerLink"><h4>Mobile app</h4></div>
                <div className="footerLink"><h4>Community</h4></div>
                <div className="footerLink"><h4>Company</h4></div>
                <div className="footerLink"><h4>photo</h4></div>
                <div className="footerLink"><h4>Help desk</h4></div>
                <div className="footerLink"><h4>Blog</h4></div>
                <div className="footerLink"><h4>Resources</h4></div>
            </div>
            <div className="footerSocialNetworks">
                <div className="footerSocialNetworksIcons">
                    <div className="footerIcons"><img src={LinkeDinIcone} /></div>
                    <div className="footerIcons"><img src={TwitterIcone} /></div>
                    <div className="footerIcons"><img src={facebookIcone} /></div>
                    <div className="footerIcons"><img src={InstagramIcone}/></div>
                </div>
                <div className="footerText">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}