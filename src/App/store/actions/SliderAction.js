import { SliderTypes } from '../types';

export const getSliderImg = () => {
    return {
        type: SliderTypes.GET_SLIDER_IMG,
    };
};

export const setSliderImg = (imgsData) => {
    return {
        type: SliderTypes.SET_SLIDER_IMG,
        payload: imgsData,
    };
};
