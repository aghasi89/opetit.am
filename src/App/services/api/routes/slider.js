import api from '../../index';

export const getSliderImgRequest = async () => {
    try {
        const response = await api.get('slide/');
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        throw error.response.data;
    }
};
