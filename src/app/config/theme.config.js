export const lightTheme = 'light';
export const darkTheme = 'dark';

export const oppositeTheme = (theme) => {
    if(theme === lightTheme) {
        return darkTheme;
    }
    return lightTheme;
};