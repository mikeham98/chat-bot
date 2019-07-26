import {constants} from "../../actions/chatBot/messages/index.actions";

const initialState = {
    messages: [],
    replying: []
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
                replying: [...state.replying, action.payload]
            };
        case constants.STOP_BOT_TYPING:
            const replying = state.replying.filter(e => e !== action.payload);
            return {
                ...state,
                replying
            };
        default:
            return state
    }
};

export default messagesReducer;