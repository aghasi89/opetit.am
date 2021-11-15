import api from "../index";

export const contactUsRequest= async (data)=>{
    try {
        const responce= await api.post('contact_us/', data)
        console.log(responce);
        return responce.data
    } catch (error) {
        console.log(error);
        
    }
}