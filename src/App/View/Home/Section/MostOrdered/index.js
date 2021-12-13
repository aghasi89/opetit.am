import p1 from "../../../../../assets/img/mostOrdered/p1.png"
import p2 from "../../../../../assets/img/mostOrdered/p2.png"
import p3 from "../../../../../assets/img/mostOrdered/p3.png"
import "./MostOrdered.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import Box from "../../../../components/Box/index";
import { ButtonComponent, TextComponent } from "../../../../components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export default function MostOrdered() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    };
    const sliderRef = useRef(null)
    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext()
        }

    }
    const previousSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev()
        }

    }

    return (
        <div className='mostOrderedGeneralConteiner d-flex justify-content-center align-items-center ' >
            <div className="container mostOrderedPositionConteiner" >
                <div className="mostOrderedTitleAndText d-flex flex-column justify-content-center align-items-center">
                    <div className="mostOrderedTitle">
                        <TextComponent
                            type="h2"
                            title="Most ordered dishes"
                            color="dark"
                        />
                    </div>
                    <div className="mostOrderedText">
                        <TextComponent
                            type="span"
                            color="secondary"
                            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand"
                        />

                    </div>
                </div>
                <div className="mostOrderedSlides " >
                    <Slider ref={sliderRef} {...settings}  >
                        <div className='slideCardConteiner  d-flex justify-content-center align-items-center flex-column' >
                            <div className="slideCard d-flex flex-column align-items-center justify-content-center">
                                <Box src={p1}
                                    title="Sed ut parspiciatis unde omnis"
                                    description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia"
                                />
                            </div>
                        </div>
                        <div className='slideCardConteiner d-flex justify-content-center align-items-center flex-column' >
                            <div className="slideCard d-flex flex-column align-items-center justify-content-center">
                                <Box src={p2}
                                    title="Sed ut parspiciatis unde omnis"
                                    description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia"
                                />
                            </div>
                        </div>
                        <div className='slideCardConteiner  d-flex justify-content-center align-items-center flex-column' >
                            <div className="slideCard d-flex flex-column align-items-center justify-content-center">
                                <Box src={p3}
                                    title="Sed ut parspiciatis unde omnis"
                                    description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia"
                                />
                            </div>
                        </div>
                        <div className='slideCardConteiner d-flex justify-content-center align-items-center flex-column' >
                            <div className="slideCard d-flex flex-column align-items-center justify-content-center">
                                <Box src={p1}
                                    title="Sed ut parspiciatis unde omnis"
                                    description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia"
                                />
                            </div>
                        </div>
                        <div className='slideCardConteiner d-flex justify-content-center align-items-center flex-column' >
                            <div className="slideCard d-flex flex-column align-items-center justify-content-center">
                                <Box src={p2}
                                    title="Sed ut parspiciatis unde omnis"
                                    description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia"
                                />
                            </div>
                        </div>
                    </Slider>

                </div>
                <div className="mostOrderedButtonsConteiner d-flex justify-content-end align-items-end">

                    <div className="leftArrow d-flex justify-content-center" >
                        <ButtonComponent
                            button_style="button"
                            title={<ArrowBackIcon />}
                            color="primary"
                            onPress={previousSlide}
                        />
                    </div>
                    <div className="rightArrow d-flex ">

                        <ButtonComponent
                            button_style="outline"
                            title={<ArrowForwardIcon />}
                            onPress={nextSlide}
                            borderColor="primary"
                            title_color="primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}