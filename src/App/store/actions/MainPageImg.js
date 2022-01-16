import { MainPageTypes } from '../types';

export const getMainPageImg = () => {
    return {
        type: MainPageTypes.GET_MAIN-PAGE_IMG,
    };
};

export const setMainPageImg = (imgsData) => {
    return {
        type: MainPageTypes.SET_MAIN-PAGE_IMG,
        payload: imgsData,
    };
};
