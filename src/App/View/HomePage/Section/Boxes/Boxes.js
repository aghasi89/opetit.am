//COMPONENTS
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import Text from '../../../../components/Text/Textt/Text';

//CSS
import './boxes.css';

const Boxes = () => {
    return (
        <section className="boxes">
            <div className="container">
                <Text type="h1" content="Boxes" />
                <Text
                    type="p"
                    content="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    stand"
                />
                <div className="images_block">{/* <BoxesImgComp /> */}</div>
                <div className="d_flex">
                    <ButtonComponent type="button" link="" content="See more" />
                </div>
            </div>
        </section>
    );
};

export default Boxes;
