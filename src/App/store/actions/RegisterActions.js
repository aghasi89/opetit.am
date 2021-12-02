import {RegisterTypes} from "../types" 

export const getConfirmCodeAction = (data) => {
    console.log(data);
    return {
        type: RegisterTypes.GET_CONFIRM_CODE,
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

  export const getMeAction =()=>{
    return {
      type: RegisterTypes.GET_ME
    }
  }
  
  export const setMeAction = (payload) => {
    return {
      type: RegisterTypes.SET_ME,
      payload
    }
  }
  