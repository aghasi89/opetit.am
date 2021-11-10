//CSS
import '../boxes_img/boxesImg.css';

//IMAGES
import img1 from '../../../assets/img/jpg/boxe_img1.jpg';
import img2 from '../../../assets/img/jpg/boxe_img2.jpg';
import img3 from '../../../assets/img/jpg/boxe_img3.jpg';

const boxesImages = [
    {
        img: img1,
        h1: 'Sed ut perspiciatis unde omnis',
        p: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
    },
    {
        img: img2,
        h1: 'Sed ut perspiciatis unde omnis',
        p: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
    },
    {
        img: img3,
        h1: 'Sed ut perspiciatis unde omnis',
        p: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
    },
];

const BoxesImgComp = () => {
    return boxesImages.map((item, indx) => {
        return (
            <div className="img_block" key={indx}>
                <img src={item.img} alt={`img_${indx}`} />
                <h2 className="images_block_h2">{item.h1}</h2>
                <p className="images_block_p">{item.p}</p>
            </div>
        );
    });
};

export default BoxesImgComp;
