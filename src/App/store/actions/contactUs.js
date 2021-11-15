import { contactUsTypes } from "../types"

export const sendMassageAction=(payload)=>{
    return {
        type:contactUsTypes.SEND_MASSAGE,
        payload:{...payload}
    }

}