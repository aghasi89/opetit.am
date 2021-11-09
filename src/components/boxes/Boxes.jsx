//COMPONENTS
import ButtonComponent from '../Button/ButtonComponent';
import Text from '../Text/Text';

//CSS
import '../boxes/boxes.css';
import BoxesImg from './boxes_img/BoxesImages';

const Boxes = () => {
    return (
        <section className="boxes">
            <div className="container">
                <Text type="h1" content="Boxes" className="boxes_h1" />
                <Text
                    type="p"
                    content="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    stand"
                    className="boxes_p"
                />
                <div className="images_block">
                    <BoxesImg />
                </div>
                <div className="d_flex">
                    <ButtonComponent
                        type="button"
                        link=""
                        content="See more"
                        className="boxes_btn"
                    />
                </div>
            </div>
        </section>
    );
};

export default Boxes;
