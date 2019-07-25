import {constants} from "../../actions/chatBot/messages/index.actions";

const initialState = {
    messages: [],
    replying: false
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_CONVERSATION_MESSAGES:
            return {
                ...state,
                messages: action.payload
            };
        case constants.START_BOT_TYPING:
            return {
                ...state,
                replying: true
            };
        case constants.STOP_BOT_TYPING:
            return {
                ...state,
                replying: false
            };
        default:
            return state
    }
};

export default messagesReducer;