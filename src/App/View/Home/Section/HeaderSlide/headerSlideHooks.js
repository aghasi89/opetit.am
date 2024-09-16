import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSliderImg } from '../../../../store/actions';

const HeaderSlideHooks = () => {
    const dispatch = useDispatch();
    const imgsData = useSelector(({ slider }) => slider.images);

    useEffect(() => {
        dispatch(getSliderImg());
    }, []);

    const imgsDataJSX = imgsData
        ? imgsData.map((item, indx) => {
              return (
                  <div key={indx}>
                      <img
                          src={item.image}
                          alt={item.alt}
                          className="background-image"
                      />
                  </div>
              );
          })
        : null;

    const settings = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        beforeChange: function (currentSlide, nextSlide) {
            // console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            // console.log("after change", currentSlide);
        },
    };

    return {
        settings,
        imgsDataJSX,
    };
};

export default HeaderSlideHooks;
