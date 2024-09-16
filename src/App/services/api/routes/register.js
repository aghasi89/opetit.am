import api, { setApiAuthorizationHeader } from "../../index";

export const confirmCodeRequest = async (email)=>{
    try {
        const response= await api.post('create_conf_code', email)
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error.response.data
    }
}

export const registerRequest = async (data)=>{
    try {
        const response = await api.post('register_user', data)
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
        throw error.response.data
    }
}
export const getMeRequest = async () => {
    try {
      const response = await api.get("get_me");
      return response.data;
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      }
      throw error;
    }
  };
  
