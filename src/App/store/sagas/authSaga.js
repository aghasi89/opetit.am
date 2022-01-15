import { call, takeLatest, put } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import api from '../../services';
import { loginRequest } from '../../services/api/routes/login';
import { authActions } from '../actions';
import { authTypes } from '../types';
const notify = (text) => {
    toast.error(text, {
        position: toast.POSITION.TOP_CENTER,
    });
};

function* login({ payload }) {
    const { username, password, role_code } = payload;
    try {
        yield put(authActions.loginLoadingAction());
        const response = yield call(
            loginRequest,
            username,
            password,
            role_code
        );
        if (response.access) {
            localStorage.setItem('access', response.access);
            api.defaults.headers.common['Authorization'] =
                'Bearer' + response.access;
            yield put(authActions.loginSuccessAction());
            yield put(authActions.loginLoadingAction());
        }
    } catch (error) {
        yield put(authActions.loginLoadingAction());
        notify(error.message);
        // yield put (authActions.setErrorMassageAction(error.message))
    }
}

export default function* watchAuthSaga() {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
    yield takeLatest(authTypes.LOGIN, login);
}

export { watchAuthSaga };
