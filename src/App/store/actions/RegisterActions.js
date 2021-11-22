import {RegisterTypes} from "../types" 

export const getConfirmCodeAction = (data) => {
    console.log(data);
    return {
        type: RegisterTypes.GET_CONFIRM_CODE,
        payload: data
    }
}

export const setConfirmCodeAction = (data) => {
    return{
        type: RegisterTypes.SET_CONFIRM_CODE,
        payload: data
    }
}

export const registerAction = (data) => {
    console.log(data,"in action");
    return {
        type: RegisterTypes.REGISTER,
        payload: data
    }
}