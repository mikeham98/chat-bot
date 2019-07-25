import axiosInstance from '../axiosInstance';
import {darkTheme, lightTheme} from "../../config/theme.config";

export const constants = {
    SET_LIGHT_THEME: 'SET_LIGHT_THEME',
    SET_DARK_THEME: 'SET_DARK_THEME'
};

export const getTheme = () => (dispatch) => {
    return axiosInstance.get('/settings')
        .then(({data}) => {
            if(data.theme === darkTheme) {
                dispatch(setDarkTheme);
            }else {
                dispatch(setLightTheme);
            }
        });
};
export const setTheme = (theme) => (dispatch) => {
    return axiosInstance.patch('/settings', {theme})
        .then(() => {
            dispatch(getTheme());
        });
};

export const setLightTheme = {
    type: constants.SET_LIGHT_THEME
};

export const setDarkTheme = {
    type: constants.SET_DARK_THEME
};