import {createSelector} from 'reselect';
import {currentConversationSelector} from "./conversationSelector";
import isPopulatedArray from "../util/isPopulatedArray";

const messagesState = state => state.messages;

export const messagesSelector = createSelector(
    messagesState,
    currentConversationSelector,
    (messages = {}, currentConversation= {}) => {
        let replying = false;
        if(isPopulatedArray(messages.replying)) {
            replying = !!messages.replying.find(e => e === currentConversation.id);
        }
        return {
            messages: messages.messages || [],
            replying
        }
    }
);