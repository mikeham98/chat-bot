import axiosInstance from '../axiosInstance';
import {currentUser, bots} from '../../../../db/config';
import {getMessages} from '../messages/index.actions'

export const sendMessage = (conversationId, message, callback) => (dispatch) => {
    const objectToSend = {
        body: message,
        read: {
            status: false,
            timestamp: null
        },
        recipient: bots[conversationId],
        createdAt: new Date(),
        createdBy: currentUser
    };
    return axiosInstance.post(`/conversation/${conversationId}/messages`, objectToSend)
        .then(() => {
            callback();
            dispatch(getMessages(conversationId));
        })
        .catch(error => {

        })
};