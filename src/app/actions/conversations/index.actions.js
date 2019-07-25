import axiosInstance from '../axiosInstance';
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
            if (isPopulatedArray(data)) {
                const firstConversation = data[0];
                dispatch(setCurrentConversation(firstConversation.id))
            }
        })
        .catch(error => {

        });
};
export const setCurrentConversation = (currentConversationId) => ({
    type: constants.SET_CURRENT_CONVERSATION,
    payload: currentConversationId
});