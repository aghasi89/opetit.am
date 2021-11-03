import '../main/main.css';
// import fon from '../../assets/img/jpg/main_background_img.jpg';

const Main = () => {
    return (
        <section className="main">
            {/* <div>
                <img src={fon} alt="s" />
            </div> */}
            <div className="container">
                <p className="main_p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                </p>
                <h1 className="main_h1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                </h1>
                <div className="main_btn">
                    <a href="/#" alt="login">
                        Join Today
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Main;
