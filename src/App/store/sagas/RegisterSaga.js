import { takeLatest, call, put } from 'redux-saga/effects';
import {
    confirmCodeRequest,
    getMeRequest,
    registerRequest,
} from '../../services/api/routes/register';
import { setUserDataAction, setMeAction, getMeAction } from '../actions';
import { RegisterTypes, SliderTypes } from '../types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authSuccessAction } from '../actions/RegisterActions';
import { setApiAuthorizationHeader } from '../../services';
import { getSliderImgRequest } from '../../services/api/routes/slider';

const notify = (text) => {
    toast.error(text, {
        position: toast.POSITION.TOP_CENTER,
    });
};

function* confirmCode({ payload }) {
    const { setLoad, setOpen, ...setData } = payload;
    try {
        console.log('confirm code in saga----------');
        const data = yield call(confirmCodeRequest, { email: setData.email });
        setLoad();
        setOpen();
    } catch (error) {
        setLoad();
        console.log('error confirmCode = ', error[0].message);
        notify(error[0].message);
    }
}

function* register({ payload }) {
    const { setLoad, ...setData } = payload;
    try {
        const data = yield call(registerRequest, {
            ...setData,
            role_code: 'CL',
        });
        const userData = data.user.user;
        setLoad();
        if (data.access) {
            console.log(data.user.user);
            localStorage.setItem('access', data.access);
            yield put(authSuccessAction());
            yield put(setMeAction(userData));
            console.log(userData);
        }
    } catch (error) {
        setLoad();
        notify(error.message);
    }
}

function* getMe() {
    const access = localStorage.getItem('access');
    try {
        setApiAuthorizationHeader(access);
        const userData = yield call(getMeRequest);
        yield put(setMeAction(userData.user));
        console.log(userData.user);
    } catch (error) {}
}

function* watchRegisterSaga() {
    yield takeLatest(RegisterTypes.GET_CONFIRM_CODE, confirmCode);
    yield takeLatest(RegisterTypes.REGISTER, register);
    yield takeLatest(RegisterTypes.GET_ME, getMe);
}

export { watchRegisterSaga };
