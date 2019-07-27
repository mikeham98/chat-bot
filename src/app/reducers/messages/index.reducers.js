import {constants} from "../../actions/chatBot/messages/index.actions";

const initialState = {
    messages: [],
    replying: [],
    botInProgress: []
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
        case constants.BOT_IN_PROGRESS:
            return {
                ...state,
                botInProgress: [...state.botInProgress, action.payload]
            };
        case constants.BOT_NOT_IN_PROGRESS:
            const botInProgress = state.botInProgress.filter(e => e !== action.payload);
            return {
                ...state,
                botInProgress
            };
        default:
            return state
    }
};

export default messagesReducer;