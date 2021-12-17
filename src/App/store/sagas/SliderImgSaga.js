import { call, put, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import { getSliderImgRequest } from '../../services/api/routes/slider';
import { SliderTypes } from '../types';
import { setSliderImg } from '../actions/SliderAction';

const notify = (text) => {
    toast.error(text, {
        position: toast.POSITION.TOP_CENTER,
    });
};

function* getSliderImg() {
    try {
        const imgsData = yield call(getSliderImgRequest);
        yield put(setSliderImg(imgsData));
    } catch (error) {
        notify(error.message);
    }
}

function* watchGetSliderImg() {
    yield takeLatest(SliderTypes.GET_SLIDER_IMG, getSliderImg);
}

export { watchGetSliderImg };
