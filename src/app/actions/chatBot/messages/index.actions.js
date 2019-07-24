import axiosInstance from '../../axiosInstance';

export const constants = {
    GET_CONVERSATION_MESSAGES: 'GET_CONVERSATION_MESSAGES'
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