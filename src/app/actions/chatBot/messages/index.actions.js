import axiosInstance from '../../axiosInstance';
import {handleBackEndBotResponse} from "../toolbar/index.actions";

export const constants = {
    GET_CONVERSATION_MESSAGES: 'GET_CONVERSATION_MESSAGES',
    START_BOT_TYPING: 'START_BOT_TYPING',
    STOP_BOT_TYPING: 'STOP_BOT_TYPING',
    BOT_IN_PROGRESS: 'BOT_IN_PROGRESS',
    BOT_NOT_IN_PROGRESS: 'BOT_NOT_IN_PROGRESS'
};

export const getMessages = (conversationId) => (dispatch) => {
    return axiosInstance.get(`/conversation/${conversationId}/messages`)
        .then(response => {
            dispatch({
                type: constants.GET_CONVERSATION_MESSAGES,
                payload: response.data
            })
        })
};

export const setOption = (optionId, messageId, callback, conversationId) => (dispatch) => {
    return axiosInstance.patch(`/messages/${messageId}`, {
        selectedOption: optionId
    })
        .then(() => {
            callback();
            // the below setTimeout is a made up time for the bot to read (open) the message
            /* istanbul ignore next */
            setTimeout(() => {
                dispatch(handleBackEndBotResponse(conversationId));
            }, 1000);
        })
};