import types from '../actionTypes';

const initialState = {};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};

export default LoginReducer;
