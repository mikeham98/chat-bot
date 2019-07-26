import {darkTheme, lightTheme} from '../config/theme.config';

export const oppositeTheme = (theme) => {
    if(theme === lightTheme) {
        return darkTheme;
    }
    return lightTheme;
};