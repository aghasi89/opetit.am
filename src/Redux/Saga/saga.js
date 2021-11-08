import { call, put, takeEvery } from '@redux-saga/core/effects';
import UserEP from '../../service/api/routes/UserEP';
import { setErrorMessage } from '../action';
import types from '../actionTypes';

//Workers
function* workerLoginSaga({ payload }) {
    try {
        const { data } = yield call(UserEP.loginUser, payload);
        localStorage.setItem('access', JSON.stringify(data.access));
        localStorage.setItem('refresh', JSON.stringify(data.refresh));
    } catch (error) {
        yield put(setErrorMessage(error.message));
    }
}

function* workerUserRegistrationSaga({ payload }) {
    try {
        const confCode = yield call(UserEP.createConfeCode, payload.email);
        const userRegObj = Object.assign(payload, confCode);
        yield call(UserEP.registeredUser(userRegObj));
    } catch (error) {
        yield put(setErrorMessage(error.message));
    }
}

//Watchers
export function* watcherLogin() {
    yield takeEvery(types.USER_LOGIN, workerLoginSaga);
}

export function* watcherRegisteredUser() {
    yield takeEvery(types.USER_REGISTRATION, workerUserRegistrationSaga);
}
