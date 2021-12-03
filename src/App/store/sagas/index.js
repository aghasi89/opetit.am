import { all } from 'redux-saga/effects';
import { watchRegisterSaga } from './RegisterSaga';
import { watchGetSliderImg } from './SliderImgSaga';

function* rootSaga() {
    yield all([watchRegisterSaga(), watchGetSliderImg()]);
}

export default rootSaga;
