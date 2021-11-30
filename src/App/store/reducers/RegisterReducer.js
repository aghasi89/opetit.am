import { RegisterTypes } from "../types";

const INIT_STATE = {
    isAuth: false,
    user: null
    
}

export default (state=INIT_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case RegisterTypes.SET_USER_DATA:
            console.log(payload);
            return {...state, user: payload ? payload : ""}
        case RegisterTypes.AUTH_SUCCESS:
            console.log("reducer...........", state);
            const stateNew = {...state, isAuth: true}
            console.log(stateNew);
            return stateNew

        // default:
        //     return state;
    }
    console.log(state);
    return state
}