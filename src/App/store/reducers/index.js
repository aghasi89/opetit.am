import { combineReducers } from 'redux';
import slider from './SliderImgReducer';
import register from './RegisterReducer';
import contactUs from './contactUsReducer';
import auth from './authReducer';
export default combineReducers({
    register,
    contactUs,
    slider,
    auth,
});
