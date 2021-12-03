import axios from "axios";
import Keys from './keys';

export const setApiAuthorizationHeader = (token) => {

  authApi.defaults.headers.common.Authorization = token
      ? "Bearer " + token
      : null;
};
const authApi = axios.create({
    baseURL: Keys.SERVER_URL,
    //headers: { 'Content-Type': 'application/json' }
});

export default authApi;
