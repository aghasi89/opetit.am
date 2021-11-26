import { RegisterTypes } from "../types";

const INIT_STATE = {
    isAuth: false,
    user: null
    
}

export default (state=INIT_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case RegisterTypes.SET_USER_DATA:
            console.log(state);
            return {...state, user: payload}
        case RegisterTypes.AUTH_SUCCESS:
            return {...state, isAuth: true}

        default:
            break;
    }
    return state
}