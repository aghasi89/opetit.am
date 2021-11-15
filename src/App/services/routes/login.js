import api from "../index";

export const loginRequest=async(username,password)=>{
    try {
        const response=await api.post("user_login/",{username,password})
         console.log(response.data);
        return response.data
       
    } catch (error) {
        console.log(error);
        throw error
    }
}