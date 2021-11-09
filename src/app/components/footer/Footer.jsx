import '../footer/footer.css';
import Logo from '../../assets/img/png/Logo.png';
import instagram from '../../assets/img/svg/instagram.svg';
import fb from '../../assets/img/svg/fb.svg';
import twiter from '../../assets/img/svg/twiter.svg';
import linkedin from '../../assets/img/svg/linkedin.svg';

const menuList = [
    'Mobile app',
    'Community',
    'Company',
    'Help desk',
    'Blog',
    'Resources',
];

const Footer = () => {
    const menuJSX = menuList.map((item, indx) => {
        return (
            <li key={indx}>
                <a href="/#">{item}</a>
            </li>
        );
    });
    return (
        <section className="footer">
            <div className="container ">
                <div className="footer_logo">
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                    <p className="footer_logo_p">photo</p>
                </div>
                <ul className="footer_menu">{menuJSX}</ul>
                <div className="horisontal_line"></div>
                <div className="footer_about">
                    <p className="footer_logo_block">
                        <img src={linkedin} alt="linkedin" />
                        <img src={twiter} alt="twiter" />
                        <img src={fb} alt="fb" />
                        <img src={instagram} alt="instagram" />
                    </p>
                    <p className="footer_about_p">
                        Lorem Ipsum is simply dummy text of the printing and
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
