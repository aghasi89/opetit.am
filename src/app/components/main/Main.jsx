//COMPONENTS
import TextComponent from '../Text/Text';

//CSS
import '../main/main.css';
import ButtonComponent from '../Button/ButtonComponent';

const Main = () => {
    return (
        <section className="main">
            <div className="container">
                <TextComponent
                    type="p"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting"
                    className="main_p"
                />
                <TextComponent
                    type="h1"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting"
                    className="main_h1"
                />
                <ButtonComponent
                    type="button"
                    link=""
                    content="Join Today"
                    className="main_btn"
                />
            </div>
        </section>
    );
};

export default Main;
