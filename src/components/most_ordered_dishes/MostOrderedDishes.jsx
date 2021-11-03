import Slider from 'react-slick';

//CSS
import '../most_ordered_dishes/mostOrderedDishes.css';

//PICTURE
import img1 from '../../assets/img/jpg/dishes1.jpg';
import img2 from '../../assets/img/jpg/dishes2.jpg';
import img3 from '../../assets/img/jpg/dishes3.jpg';
import prev from '../../assets/img/svg/prev.svg';
import next from '../../assets/img/svg/next.svg';
import { useRef } from 'react';

const orderedDishes = [
    {
        pic: img1,
        name: 'Sed ut perspiciatis unde omnis',
        description:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia ',
    },
    {
        pic: img2,
        name: 'Sed ut perspiciatis unde omnis',
        description:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia ',
    },
    {
        pic: img3,
        name: 'Sed ut perspiciatis unde omnis',
        description:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia ',
    },
    {
        pic: img1,
        name: 'Sed ut perspiciatis unde omnis',
        description:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia ',
    },
    {
        pic: img2,
        name: 'Sed ut perspiciatis unde omnis',
        description:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia ',
    },
    {
        pic: img3,
        name: 'Sed ut perspiciatis unde omnis',
        description:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia ',
    },
];

const settings = {
    className: 'center',
    centerMode: false,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
};

const MostOrderedDishes = () => {
    const orderedDishesJSX = orderedDishes.map((item, indx) => {
        return (
            <div className="ordered_dishes_item_block" key={indx}>
                <div className="ordered_dishes_pic">
                    <img src={item.pic} alt={item.name} />
                    <h2 className="ordered_dishes_item_h2">{item.name}</h2>
                    <p className="ordered_dishes_item_p ordered_dishes_p ordered_dishes_item">
                        {item.description}
                    </p>
                </div>
            </div>
        );
    });
    const slide = useRef();
    return (
        <section className="most_ordered_dishes">
            <div className="container">
                <h1 className="ordered_dishes_h1">Most ordered dishes</h1>
                <p className="ordered_dishes_p ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    stand
                </p>
                <div className="ordered_dishes_container">
                    <div className="slider_wrapper">
                        <Slider
                            focusOnSelect={false}
                            arrows={false}
                            touchMove={false}
                            ref={slide}
                            autoplay={true}
                            autoplaySpeed={1500}
                            {...settings}
                        >
                            {orderedDishesJSX}
                        </Slider>
                    </div>
                </div>
                <div className="ordered_dishes_btn_group">
                    <div
                        onClick={() => {
                            if (slide.current) {
                                slide.current?.slickPrev();
                            }
                        }}
                    >
                        <img src={prev} alt="prev" className="img" />
                    </div>
                    <div
                        onClick={() => {
                            if (slide.current) {
                                slide.current?.slickNext();
                            }
                        }}
                    >
                        <img src={next} alt="next" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MostOrderedDishes;
