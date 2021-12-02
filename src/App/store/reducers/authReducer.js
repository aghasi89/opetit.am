import { authTypes } from "../types";

const INIT_STATE={
    isAuth:false,
    errorMassage:null

}
export default function authReducer(state=INIT_STATE,action){
    const {type,payload}=action
    switch (type) {
        case authTypes.LOGIN_SUCCESS:
            
           return{...state, isAuth:true}

           case authTypes.SET_ERROR_MESSAGE:
               console.log(payload);
               return {...state,errorMassage:payload?payload:null}
    
        default:
           return state
    }
}