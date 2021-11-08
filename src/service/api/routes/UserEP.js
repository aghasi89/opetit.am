import LoginAPI from '../../../utils/LoginAPI';

class UserEP {
    loginUser(userData) {
        return LoginAPI.post('user_login', userData)
            .then((response) => response)
            .catch(function (error) {
                throw error;
            });
    }
    createConfeCode(emailUser) {
        return LoginAPI.post('create_conf_code', { emailUser })
            .then((response) => response)
            .catch(function (error) {
                throw error;
            });
    }
    registeredUser(regUser) {
        return LoginAPI.post('register_user', regUser)
            .then((response) => response)
            .catch(function (error) {
                throw error;
            });
    }
}

export default new UserEP();
