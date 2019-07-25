import {constants} from "../../actions/conversations/index.actions";
import {darkTheme, lightTheme} from "../../config/theme.config";

const initialState = {
    theme: darkTheme
};

const conversationsReducer = (state = initialState, action) => {
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

export default conversationsReducer;