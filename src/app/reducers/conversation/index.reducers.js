import {constants} from "../../actions/conversation/index.actions";

const initialState = {
    messages: [],
    replying: false
};

const conversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_CONVERSATION_MESSAGES:
            return {
                ...state,
                messages: action.payload
            };
        default:
            return state
    }
};

export default conversationReducer;