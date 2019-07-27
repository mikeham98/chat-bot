import {constants} from "../../actions/settings/index.actions";
import {darkTheme, lightTheme} from "../../config/theme.config";

const initialState = {
    theme: lightTheme
};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_LIGHT_THEME:
            return {
                theme: lightTheme
            };
        case constants.SET_DARK_THEME:
            return {
                theme: darkTheme
            };
        default:
            return state
    }
};

export default settingsReducer;