import { contactUsTypes } from "../types"

const INIT_STATE= {
    messageSentLoading:false
}

export default (state=INIT_STATE,action)=>{
const {type, payload}=action
switch (type) {
    case contactUsTypes.SEND_MESSAGE_LOADER:
    return {...state, messageSentLoading:!state.messageSentLoading}
    default:
        return state
}
}