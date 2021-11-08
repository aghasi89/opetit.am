import types from '../actionTypes';

const initialState = {
    errorMessage: '',
};

const GlobalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.payload,
            };
        }
        default:
            return state;
    }
};

export default GlobalReducer;
