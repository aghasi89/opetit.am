import { useContext } from 'react';
import Slider from 'react-slick';
import { ButtonComponent } from '../../../../components';
import { ThemeContext } from '../../../../../context/';
import background from './background.png';
import './style.css';

export default function HeaderSlide() {
    const { norm_btn } = useContext(ThemeContext);
    const settings = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        beforeChange: function (currentSlide, nextSlide) {
            console.log('before change', currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log('after change', currentSlide);
        },
    };
    return (
        <div className="slide-content">
            <div className="slider">
                <Slider {...settings}>
                    <div>
                        <img
                            src={background}
                            alt="bg-img"
                            className="background-image"
                        />
                    </div>
                    <div>
                        <img
                            src={background}
                            alt="bg-img"
                            className="background-image"
                        />
                    </div>
                    <div>
                        <img
                            src={background}
                            alt="bg-img"
                            className="background-image"
                        />
                    </div>
                    <div>
                        <img
                            src={background}
                            alt="bg-img"
                            className="background-image"
                        />
                    </div>
                </Slider>
                <div className="layer d-flex justify-content-center align-items-center">
                    <div className="layer-wrapper d-flex flex-column align-items-start justify-content-between">
                        <div className="layer-text d-flex flex-column justify-content-end">
                            <p>
                                LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING
                                AND TYPESETTING
                            </p>
                            <h1>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting
                            </h1>
                        </div>
                        <div className="slider_btn">
                            <ButtonComponent
                                title="Join Today"
                                onPress={() => {}}
                                style={norm_btn}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
