import { combineReducers } from 'redux';
import slider from './SliderImgReducer';
import register from './RegisterReducer';

export default combineReducers({
    register,
    slider,
});
