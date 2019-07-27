import axiosInstance from '../axiosInstance';

export const constants = {
    GET_CONVERSATION_LIST: 'GET_CONVERSATION_LIST',
    SET_CURRENT_CONVERSATION: 'SET_CURRENT_CONVERSATION'
};

export const getConversationList = () => (dispatch) => {
    return axiosInstance.get('/conversation/')
        .then(({data}) => {
            dispatch({
                type: constants.GET_CONVERSATION_LIST,
                payload: data
            });
        })
};

export const setColor = (color, conversationId) => (dispatch) => {
    return axiosInstance.patch(`/conversation/${conversationId}`, {color})
        .then(() => {
            dispatch(getConversationList());
        })
};

export const setCurrentConversation = (conversationId) => (dispatch) => {
    dispatch({
        type: constants.SET_CURRENT_CONVERSATION,
        payload: conversationId
    });
    return axiosInstance.patch(`/conversation/${conversationId}`, {read: true})
        .then(() => {
            dispatch(getConversationList());
        })
};