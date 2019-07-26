import axiosInstance from '../../axiosInstance';
import {conversations, currentUser} from '../../../../../db/config';
import {constants, getMessages} from '../messages/index.actions'
import {getConversationList} from '../../conversations/index.actions'
import isPopulatedArray from "../../../util/isPopulatedArray";
import store from '../../../store';

export const sendMessage = (conversationId, message, callback) => (dispatch) => {
    // get bot from conversation config based on conversationId
    const bot = conversations[conversationId];
    const objectToSend = {
        content: {
            body: message
        },
        recipient: {
            userId: bot.userId,
            userName: bot.name,
        },
        createdAt: new Date(),
        createdBy: currentUser
    };
    return axiosInstance.post(`/conversation/${conversationId}/messages`, objectToSend)
        .then((response) => {
            callback();
            dispatch(getMessages(conversationId));

            dispatch(handleBackEndUpdateLatestConversation(conversationId, {
                latest: {
                    message: response.data.content.body,
                    createdAt: response.data.createdAt,
                }
            }));
            // the below setTimeout is a made up time for the bot to read (open) the message
            setTimeout(() => {
                dispatch(handleBackEndBotResponse(conversationId));
            }, 1000);
        })
};

// the below functions would exist on a backend, it is just here for demo purposes

export const handleBackEndUpdateLatestConversation = (conversationId, latest) => (dispatch) => {
    axiosInstance.patch(`/conversation/${conversationId}`, latest)
        .then(() => {
            dispatch(getConversationList());
        });
};

export const handleBackEndGetMessages = async (conversationId) => {
    return axiosInstance.get(`/conversation/${conversationId}/messages`)
        .then(response => {
            return response.data;
        });

};
export const handleBackEndBotResponse = (conversationId) => async (dispatch) => {
    // get bot from conversation config based on conversationId
    const bot = conversations[conversationId];
    const messages = await handleBackEndGetMessages(conversationId);

    const messagesFromBot = isPopulatedArray(messages) && messages.filter(e => {
        return e.createdBy.userId === bot.userId
    });

    const nextMessage = bot.messages[messagesFromBot.length];

    if (nextMessage) {
        let delayInResponse = nextMessage.delay || 0;
        setTimeout(() => {
            dispatch({
                type: constants.START_BOT_TYPING,
                payload: conversationId
            });
            const secondsPerCharacter = 1 / 5;
            const speedInMilliseconds = (secondsPerCharacter * nextMessage.body.length) * 1000;

            const objectToSend = {
                content: {
                    body: nextMessage.body,
                    media: nextMessage.media,
                    options: nextMessage.options,
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
                    .then((response) => {
                        const currentConversationId = store.getState().conversations.currentConversationId;
                        dispatch(handleBackEndUpdateLatestConversation(conversationId, {
                            latest: {
                                message: response.data.content.body,
                                createdAt: response.data.createdAt,
                            },
                            read: currentConversationId === conversationId
                        }));
                        dispatch({
                            type: constants.STOP_BOT_TYPING,
                            payload: conversationId
                        });
                        dispatch(getMessages(currentConversationId));
                    });
            }, speedInMilliseconds);
        }, delayInResponse)
    }
};