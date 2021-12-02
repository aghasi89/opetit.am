import { contactUsTypes } from "../types"

const INIT_STATE= {
}

export default (state=INIT_STATE,action)=>{
const {type, payload}=action
switch (type) {
    case '1':
    return {...state}
    default:
        return state
}
}