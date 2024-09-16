import { all } from 'redux-saga/effects';
import { watchRegisterSaga } from './RegisterSaga';
import { watchAuthSaga } from './authSaga';
import { watchGetSliderImg } from './SliderImgSaga';
import contactusSaga from './contactUsSaga';

function* rootSaga() {
    yield all([
        watchRegisterSaga(),
        contactusSaga(),
        watchAuthSaga(),
        watchGetSliderImg(),
    ]);
}
export default rootSaga;
