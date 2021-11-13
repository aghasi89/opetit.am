//COMPONENTS
import { borderColor, width } from '@mui/system';
import { black } from 'material-ui/styles/colors';
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import TextComponent from '../../../../components/Text/';

//CSS
import './boxes.css';

const Boxes = () => {
    return (
        <section className="boxes">
            <div className="container">
                <div className="boxes_wrapper">
                    <TextComponent type="h1" title="Boxes" />
                    <TextComponent
                        type="paragraph"
                        title="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    stand"
                    />
                    <div className="boxes">
                        <div className="blocks">asdf</div>
                        <div className="blocks">asdf</div>
                        <div className="blocks">asdf</div>
                    </div>
                    <div className="boxe_btn">
                        <ButtonComponent
                            type="small_button"
                            link=""
                            title="See more"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Boxes;
