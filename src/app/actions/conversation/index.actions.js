import messages from '../../../../json/messages';

export const constants = {
    GET_CONVERSATION_MESSAGES: 'GET_CONVERSATION_MESSAGES'
};

export const getConversationMessages = () => (dispatch) => {
    dispatch({
        type: constants.GET_CONVERSATION_MESSAGES,
        payload: messages
    })
};