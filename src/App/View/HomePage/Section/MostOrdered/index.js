import p1 from './Images/p1.png'
import p2 from './Images/p2.png'
import p3 from './Images/p3.png'
import "./MostOrdered.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';


export default function MostOrdered() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false
      };
      const sliderRef =useRef(null)
      const nextSlide=()=>{
          if (sliderRef.current) {
              sliderRef.current.slickNext()
          }

    }
      const previousSlide=()=>{
          if (sliderRef.current) {
              sliderRef.current.slickPrev()
          }

    }
    
    return (
        <div className='mostOrderedGeneralConteiner d-flex justify-content-center align-items-center ' >
            <div className="mostOrderedPositionConteiner" >
                <div className="mostOrderedTitleAndText d-flex flex-column justify-content-center align-items-center">
                    <div className="mostOrderedTitle"><h4>Most ordered dishes</h4></div>
                    <div className="mostOrderedText"> Lorem ipsum dolor sit,  vero cum non excepturi nulla iste nam debitis a</div>
                </div> 
                <div className="mostOrderedSlides " >
                   <Slider ref={sliderRef} {...settings} >
                      <div className='slideCard  d-flex justify-content-center align-items-center flex-column' >
                      <div style={{width:"90%", margin:"0px 5px"}}className="d-flex flex-column align-items-center justify-content-center">

                        <div className="slideCardImageConteiner"  ><img className="slideImage" src={p1} ></img></div>
                        <div className="slideCardTitle d-flex aligen-items-center justify-content-center" >
                            <h6>Sed ut parspiciatis unde omnis</h6>
                        </div>
                        <div className='slideCardInfoText d-flex aligen-items-center justify-content-center'>
                            <span>Lorem ipsum dolor sit,  vero cum non excepturi nulla iste nam debitis a</span>
                        </div>
                        </div>
                    </div>


                    <div className='slideCard d-flex justify-content-center align-items-center flex-column'>
                    <div style={{width:"90%", margin:"0px 5px"}}className="d-flex flex-column align-items-center justify-content-center">
                        <div className="slideCardImageConteiner" ><img className="slideImage" src={p2}></img></div>
                        <div className="slideCardTitle d-flex aligen-items-center justify-content-center" >
                            <h6>Sed ut parspiciatis unde omnis</h6>
                        </div>
                        <div className='slideCardInfoText d-flex aligen-items-center justify-content-center'>
                            <span>Lorem ipsum dolor sit,  vero cum non excepturi nulla iste nam debitis a</span>
                        </div>
                        </div>
                    </div>


                    <div className='slideCard d-flex justify-content-center align-items-center flex-column'>
                        <div style={{width:"90%", margin:"0px 5px"}}className="d-flex flex-column align-items-center justify-content-center">
                        <div className="slideCardImageConteiner"><img className="slideImage" src={p3}></img></div>
                        <div className="slideCardTitle d-flex aligen-items-center justify-content-center" >
                            <h6>Sed ut parspiciatis unde omnis</h6>
                        </div>
                        <div className='slideCardInfoText d-flex aligen-items-center justify-content-center'>
                            <span>Lorem ipsum dolor sit,  vero cum non excepturi nulla iste nam debitis a</span>
                        </div>
                        </div>
                    </div>
                    <div className='slideCard d-flex justify-content-center align-items-center flex-column'>
                    <div style={{width:"90%", margin:"0px 5px"}}className="d-flex flex-column align-items-center justify-content-center">
                        <div className="slideCardImageConteiner"><img className="slideImage" src={p1}></img></div>
                        <div className="slideCardTitle d-flex aligen-items-center justify-content-center" >
                            <h6>Sed ut parspiciatis unde omnis</h6>
                        </div>
                        <div className='slideCardInfoText d-flex aligen-items-center justify-content-center'>
                            <span>Lorem ipsum dolor sit,  vero cum non excepturi nulla iste nam debitis a</span>
                        </div>
                        </div>
                    </div>
                    <div className='slideCard d-flex justify-content-center align-items-center flex-column'>
                    <div style={{width:"90%", margin:"0px 5px"}}className="d-flex flex-column align-items-center justify-content-center">
                        <div className="slideCardImageConteiner" ><img className="slideImage" src={p2} ></img></div>
                        <div className="slideCardTitle d-flex aligen-items-center justify-content-center" >
                            <h6>Sed ut parspiciatis unde omnis</h6>
                        </div>
                        <div className='slideCardInfoText d-flex aligen-items-center justify-content-center'>
                            <span>Lorem ipsum dolor sit,  vero cum non excepturi nulla iste nam debitis a</span>
                        </div>
                        </div>
                    </div> 
                     </Slider> 

               </div>
               <div className="mostOrderedButtonsConteiner d-flex justify-content-end align-items-end">

                   <div className="leftArrow d-flex justify-content-center" ><button onClick={previousSlide} >prev</button></div>
                  <div className="rightArrow d-flex "> <button onClick={nextSlide}>next</button></div>
               </div>
          </div>
        </div>
    )
}