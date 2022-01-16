import { authTypes } from "../types";

const INIT_STATE={
    isAuth:false,
    errorMassage:null,
    loading:false

}
export default function authReducer(state=INIT_STATE,action){
    const {type,payload}=action
    switch (type) {
        case authTypes.LOGIN_SUCCESS:
            
           return{...state, isAuth:true}

           case authTypes.SET_ERROR_MESSAGE:
               console.log(payload);
               return {...state,errorMassage:payload?payload:null}
            
        case authTypes.LOGIN_LOADING:
            console.log(state.loading);
            const bul =!state.loading
            console.log(bul);
            return {...state,loading:!state.loading}
        default:
            console.log("------------------> default");
           return state
    }
}