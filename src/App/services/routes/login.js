import api from "../index";

export const loginRequest=async(username,password,role_code)=>{
    try {
        const response=await api.post("user_login",{username,password,role_code})
         console.log(response);
        return response.data
       
    } catch (error) {
      
        throw error.response.data
    }
}