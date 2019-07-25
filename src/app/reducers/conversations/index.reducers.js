import {constants} from "../../actions/conversations/index.actions";

const initialState = {
    conversations: [],
    currentConversationId: null
};

const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_CONVERSATION_LIST:
            return {
                ...state,
                conversations: action.payload
            };
        case constants.SET_CURRENT_CONVERSATION:
            return {
                ...state,
                currentConversationId: action.payload
            };
        default:
            return state
    }
};

export default conversationsReducer;