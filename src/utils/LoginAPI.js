import axios from 'axios';

const LoginAPI = axios.create({
    baseURL: 'http://game.annaniks.com',
    responseType: 'json',
});

export default LoginAPI;
