import { RegisterTypes } from "../types";

const INIT_STATE = {
    
}

export default (state=INIT_STATE, action) => {
    const {type, payload} = action;
    console.log(payload);
    switch (type) {
        case RegisterTypes.GET_CONFIRM_CODE:
            console.log("payload in reducer", payload);
            return {...state, ...payload }
        case RegisterTypes.SET_CONFIRM_CODE:
            return {...state, ...payload}

        default:
            break;
    }
    return state
}