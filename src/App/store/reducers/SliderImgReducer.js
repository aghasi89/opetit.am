import { SliderTypes } from '../types';

const INIT_STATE = {
    images: null,
};

const slider = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SliderTypes.SET_SLIDER_IMG: {
            return {
                ...state,
                images: payload.results,
            };
        }
        default:
            return state;
    }
};

export default slider;
