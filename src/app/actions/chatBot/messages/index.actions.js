import axiosInstance from '../../axiosInstance';
import {handleBackEndBotResponse} from "../toolbar/index.actions";

export const constants = {
    GET_CONVERSATION_MESSAGES: 'GET_CONVERSATION_MESSAGES',
    START_BOT_TYPING: 'START_BOT_TYPING',
    STOP_BOT_TYPING: 'STOP_BOT_TYPING'
};

export const getMessages = (conversationId) => (dispatch) => {
    return axiosInstance.get(`/conversation/${conversationId}/messages`)
        .then(response => {
            dispatch({
                type: constants.GET_CONVERSATION_MESSAGES,
                payload: response.data
            })
        })
        .catch(error => {

        });
};

export const setOption = (optionId, messageId, callback, conversationId) => (dispatch) => {
    return axiosInstance.patch(`/messages/${messageId}`, {
        selectedOption: optionId
    })
        .then(() => {
            callback();
            // the below setTimeout is a made up time for the bot to read (open) the message
            setTimeout(() => {
                dispatch(handleBackEndBotResponse(conversationId));
            }, 1000);
        })
        .catch(error => {

        });
};