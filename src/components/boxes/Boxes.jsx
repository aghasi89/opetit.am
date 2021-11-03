import '../boxes/boxes.css';
import img1 from '../../assets/img/jpg/boxe_img1.jpg';
import img2 from '../../assets/img/jpg/boxe_img2.jpg';
import img3 from '../../assets/img/jpg/boxe_img3.jpg';

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

const Boxes = () => {
    const imgJSX = boxesImages.map((item, indx) => {
        return (
            <div className="img_block" key={indx}>
                <img src={item.img} alt={`img_${indx}`} />
                <h2 className="images_block_h2">{item.h1}</h2>
                <p className="images_block_p">{item.p}</p>
            </div>
        );
    });

    return (
        <section className="boxes">
            <div className="container">
                <h1 className="boxes_h1">Boxes</h1>
                <p className="boxes_p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    stand
                </p>
                <div className="images_block">{imgJSX}</div>
                <div className="">
                    <div className="boxes_btn">
                        <a href="/#" alt="login">
                            See more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Boxes;
