import axiosInstance from '../../axiosInstance';
import {conversations, currentUser} from '../../../../../db/config';
import {constants, getMessages} from '../messages/index.actions'
import isPopulatedArray from "../../../util/isPopulatedArray";

export const sendMessage = (conversationId, message, callback) => (dispatch) => {
    // get bot from conversation config based on conversationId
    const bot = conversations[conversationId];
    const objectToSend = {
        content: {
            body: message
        },
        read: {
            status: false,
            timestamp: null
        },
        recipient: {
            userId: bot.userId,
            userName: bot.name,
        },
        createdAt: new Date(),
        createdBy: currentUser
    };
    return axiosInstance.post(`/conversation/${conversationId}/messages`, objectToSend)
        .then(() => {
            callback();
            dispatch(getMessages(conversationId));

            // the below setTimeout is a made up time for the bot to read (open) the message
            setTimeout(() => {
                dispatch(handleBackEndBotResponse(conversationId));
            }, 1000);
        })
        .catch(error => {

        })
};

// the below functions would exist on a backend, it is just here for demo purposes
const handleBackEndGetMessages = async (conversationId) => {
    return axiosInstance.get(`/conversation/${conversationId}/messages`)
        .then(response => {
            return response.data;
        });

};
const handleBackEndBotResponse = (conversationId) => async (dispatch) => {
    // get bot from conversation config based on conversationId
    const bot = conversations[conversationId];
    const messages = await handleBackEndGetMessages(conversationId);

    const messagesFromBot = isPopulatedArray(messages) && messages.filter(e => {
        return e.createdBy.userId === bot.userId
    });

    const nextMessage = bot.messages[messagesFromBot.length];

    if (nextMessage) {
        let delayInResponse = nextMessage.delay || 0;
        console.log(delayInResponse);
        setTimeout(() => {
            dispatch({
                type: constants.START_BOT_TYPING
            });
            const secondsPerCharacter = 1 / 5;
            const speedInMilliseconds = (secondsPerCharacter * nextMessage.body.length) * 1000;

            const objectToSend = {
                content: {
                    body: nextMessage.body,
                    media: nextMessage.media,
                    options: nextMessage.options,
                },
                read: {
                    status: false,
                    timestamp: null
                },
                recipient: currentUser,
                createdAt: new Date(),
                createdBy: {
                    userId: bot.userId,
                    userName: bot.name,
                }
            };

            setTimeout(() => {
                axiosInstance.post(`/conversation/${conversationId}/messages`, objectToSend)
                    .then(() => {
                        dispatch({
                            type: constants.STOP_BOT_TYPING
                        });
                        dispatch(getMessages(conversationId));
                    });
            }, speedInMilliseconds);
        },delayInResponse)
    }
};