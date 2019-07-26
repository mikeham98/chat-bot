import axiosInstance from '../axiosInstance';
import store from '../../store';
import isPopulatedArray from "../../util/isPopulatedArray";

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
export const setCurrentConversation = (conversationId) => (dispatch) => {
    dispatch({
        type: constants.SET_CURRENT_CONVERSATION,
        payload: conversationId
    });
    axiosInstance.patch(`/conversation/${conversationId}`, {read: true})
        .then(() => {
            dispatch(getConversationList());
        })
};