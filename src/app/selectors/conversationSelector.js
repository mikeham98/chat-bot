import {createSelector} from 'reselect';
import isPopulatedArray from "../util/isPopulatedArray";

const conversationState = state => state.conversations;

export const currentConversationSelector = createSelector(
    conversationState,
    (conversation) => {
        const {conversations} = conversation;
        let currentConversation;
        if (isPopulatedArray(conversations)) {
            currentConversation = conversations.find(e => e.id === conversation.currentConversationId);
        }
        return currentConversation || {}
    }
);

export const conversationSelector = createSelector(
    conversationState,
    currentConversationSelector,
    (conversation, currentConversation = {}) => {
        let mappedConversation = conversation.conversations;
        if(isPopulatedArray(mappedConversation)) {
            mappedConversation = conversation.conversations.map(e => ({
                ...e,
                selected: e.id === currentConversation.id
            }))
        }
        return {
            currentConversation,
            conversations: mappedConversation,
        };
    }
);