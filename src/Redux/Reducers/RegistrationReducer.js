import types from '../actionTypes';

const initialState = {};

const RegistrationReduser = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_REGISTRATION: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};

export default RegistrationReduser;
