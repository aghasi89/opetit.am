import { RegisterTypes } from "../types";

const INIT_STATE = {
    isAuth: false,
    user: null

}

export default (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
       case RegisterTypes.AUTH_SUCCESS:
           const stateNew = { ...state, isAuth: true }
            return stateNew
        case RegisterTypes.SET_ME:
            console.log(payload);
            return { ...state, user: payload ? payload : "" }
        default:
            return state;
    }
    return state
}