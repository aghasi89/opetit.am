import types from './actionTypes';

const userLogin = (userData) => {
    return {
        type: types.USER_LOGIN,
        payload: userData,
    };
};

const userRegistration = (userData) => {
    return {
        type: types.USER_REGISTRATION,
        payload: userData,
    };
};

const setErrorMessage = (errorMessage) => {
    return {
        type: types.SET_ERROR_MESSAGE,
        payload: errorMessage,
    };
};
export { userLogin, userRegistration, setErrorMessage };
