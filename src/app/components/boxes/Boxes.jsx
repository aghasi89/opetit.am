//COMPONENTS
import ButtonComponent from '../Button/ButtonComponent';
import Text from '../Text/Text';
import BoxesComponent from '../boxesComponent/BoxesComponent';

//CSS
import '../boxes/boxes.css';

//IMAGES
import img1 from '../../assets/img/jpg/boxe_img1.jpg';
import img2 from '../../assets/img/jpg/boxe_img2.jpg';
import img3 from '../../assets/img/jpg/boxe_img3.jpg';

const boxesImages = [
    {
        img: img1,
        name: 'Sed ut perspiciatis unde omnis',
        description:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
    },
    {
        img: img2,
        name: 'Sed ut perspiciatis unde omnis',
        description:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
    },
    {
        img: img3,
        name: 'Sed ut perspiciatis unde omnis',
        description:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
    },
];

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
                    <BoxesComponent data={boxesImages} className="img_block" />
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
