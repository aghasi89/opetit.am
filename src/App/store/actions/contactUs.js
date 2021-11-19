import { contactUsTypes } from "../types"

export const sendMassageAction=(payload)=>{
    return {
        type:contactUsTypes.SEND_MASSAGE,
        payload:{...payload}
    }

}
export const sendMassageSuccessAction=()=>{
    return {
        type:contactUsTypes.SEND_MASSAGE_SUCCESS,
    }

}