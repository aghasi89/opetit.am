import api from "../../index";

export const contactUsRequest= async (data)=>{
    try {
        const responce= await api.post('contact_us/', data)
        return responce
    } catch (error) {
        console.log(error);
        throw error
        
    }
}