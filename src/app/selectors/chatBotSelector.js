import {createSelector} from 'reselect';
import {currentUser} from "../../../db/config";
import {conversationSelector} from "./conversationSelector";
import {messagesSelector} from "./messagesSelector";

export const chatBotSelector = createSelector(
    conversationSelector,
    messagesSelector,
    (conversation, messages) => {
        const {currentConversation} = conversation;
        return {
            ...messages,
            currentUserId: currentUser.userId,
            currentConversation
        }
    }
);