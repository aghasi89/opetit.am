//COMPONENTS
import TextComponent from '../../components/Text';
import ButtonComponent from '../../components/Button';
import Box from '../../components/Box';

import boxe_img1 from '../../assets/img/jpg/boxe_img1.jpg';
import boxe_img2 from '../../assets/img/jpg/boxe_img2.jpg';
import boxe_img3 from '../../assets/img/jpg/boxe_img3.jpg';

//CSS
import './boxes.css';

const Boxes = () => {
    const handleClick = () => {
        console.log('click');
    };
    return (
        <div className="boxes_wrapper">
            <div className="container">
                <div className="boxes_h2">
                    <TextComponent type="h2" title="Boxes" color="raven" />
                </div>
                <div className="boxes_p">
                    <TextComponent
                        type="p"
                        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys stand"
                        color="secondary"
                    />
                </div>
                <div className="box_wrapper">
                    <Box
                        src={boxe_img1}
                        title="Sed ut perspiciatis unde omnis"
                        description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia "
                    />
                    <Box
                        src={boxe_img2}
                        title="Sed ut perspiciatis unde omnis"
                        description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia "
                    />
                    <Box
                        src={boxe_img3}
                        title="Sed ut perspiciatis unde omnis"
                        description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia "
                    />
                </div>
                <div className="boxes_btn">
                    <ButtonComponent
                        onPress={handleClick}
                        title="See more"
                        color="primary"
                        button_style="button"
                    />
                </div>
            </div>
        </div>
    );
};

export default Boxes;
