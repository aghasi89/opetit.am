import Slider from 'react-slick';
import ButtonComponent from '../../../../components/Button';
import { TextComponent } from '../../../../components';
import HeaderSlideHooks from './HeaderSlideHooks';
import './style.css';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getSliderImg } from '../../../../store/actions';

export default function HeaderSlide() {
    const { settings, imgsDataJSX } = HeaderSlideHooks();
    return (
        <div className="slide-content">
            <div className="slider">
                <Slider {...settings}>
                    {imgsDataJSX ? imgsDataJSX : null}
                    {/* <div>
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
                    </div> */}
                </Slider>
                <div className="layer d-flex justify-content-center align-items-center">
                    <div className="layer-wrapper d-flex flex-column align-items-start justify-content-between">
                        <div className="layer-text d-flex flex-column justify-content-center">
                            <TextComponent
                                type="p"
                                color="white"
                                title="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING
                                AND TYPESETTING"
                            />
                            <TextComponent
                                type="h1"
                                color="white"
                                title="Lorem Ipsum is simply dummy text of the printing
                                and typesetting"
                            />
                        </div>
                        <div className="join_us_btn">
                            <ButtonComponent
                                onPress={() => {
                                    console.log('Clicked');
                                }}
                                button_style="outline"
                                title="Join Today"
                                borderColor="white"
                                title_color="white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
