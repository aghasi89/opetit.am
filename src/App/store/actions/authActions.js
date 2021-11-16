import{ authTypes} from "../types/index"

export const loginAction=({username,password,role_code})=>{
    return {
           type:authTypes.LOGIN,
           payload:{
               username,
               password,
               role_code
           }
    }
     
    
}
export const loginSuccessAction=()=>{
    return{
        type:authTypes.LOGIN_SUCCESS
    }
}