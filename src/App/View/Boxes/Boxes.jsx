//COMPONENTS
import { useContext } from 'react';
import TextComponent from '../../components/Text';
import ButtonComponent from '../../components/Button';
import { ThemeContext } from '../../../context';

//CSS
import './boxes.css';

const Boxes = () => {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
        console.log();
    };
    return (
        <div className="boxes_wrapper">
            <div className="container">
                <div className="boxes_h3">
                    <TextComponent type="h3" title="Boxes" />
                </div>
                <div className="boxes_p">
                    <TextComponent
                        type="p"
                        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys stand"
                    />
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="boxes_btn">
                    <ButtonComponent
                        // onPress={handleClick}
                        link="/"
                        title="See more"
                        color="green"
                    />
                </div>
            </div>
        </div>
    );
};

export default Boxes;
