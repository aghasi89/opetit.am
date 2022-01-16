import api from '../../index';

export const getMainPageImgRequest = async () => {
    try {
        const response = await api.get('box/');
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        throw error.response.data;
    }
};