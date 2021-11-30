import {RegisterTypes} from "../types" 

export const getConfirmCodeAction = (data) => {
    console.log(data);
    return {
        type: RegisterTypes.GET_CONFIRM_CODE,
        payload: data
    }
}

export const setUserDataAction = (data) => {
    console.log("setUserDataAction>>>>>>>>>>.", data);
    return{
        type: RegisterTypes.SET_USER_DATA,
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

export const authSuccessAction = () => {
    return {
      type: RegisterTypes.AUTH_SUCCESS
    };
  };