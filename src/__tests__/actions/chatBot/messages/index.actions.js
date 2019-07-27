import axiosInstance from '../../../../app/actions/axiosInstance';
import {constants, getMessages, setOption} from '../../../../app/actions/chatBot/messages/index.actions';
import MockAdapter from 'axios-mock-adapter';

const mockAxios = new MockAdapter(axiosInstance);

describe('messages actions', () => {

    const mockDispatch = jest.fn();
    const dispatch = jest.fn((thunk) => thunk(mockDispatch));

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getMessages', () => {
        describe('success', () => {
            beforeEach(() => {
                mockAxios.onGet('http://localhost:3000/conversation/bot1/messages').reply(200, messages);
            });
            it('should call mockDispatch with an action of type GET_CONVERSATION_MESSAGES and a payload of messages', () => {
                expect(mockDispatch).not.toHaveBeenCalled();

                return dispatch(getMessages('bot1')).then(() => {
                    expect(mockDispatch).toHaveBeenCalledTimes(1);
                    expect(mockDispatch).toHaveBeenCalledWith({
                        type: constants.GET_CONVERSATION_MESSAGES,
                        payload: messages
                    })
                });
            });
        });
    });

    describe('setOption', () => {
        describe('success', () => {
            beforeEach(() => {
                mockAxios.onPatch('http://localhost:3000/messages/5', {
                    selectedOption: 10
                }).reply(200);
            });
            it('should not call mockDispatch but call the callback passed in', () => {
                const optionId = 10;
                const messageId = 5;
                const callback = jest.fn();
                const conversationId = 1;
                expect(mockDispatch).not.toHaveBeenCalled();
                return dispatch(setOption(optionId, messageId, callback, conversationId)).then(() => {
                    expect(mockDispatch).not.toHaveBeenCalled();
                    expect(callback).toHaveBeenCalled();
                });
            });
        });
    });
});

const messages = [{
    "id": 0,
    "conversationId": "bot1",
    "body": "hello Mike",
    "read": {
        "status": true,
        "timestamp": "2019-07-23T20:04:14+00:00"
    },
    "recipient": {
        "userId": 1,
        "userName": "mikeham98"
    },
    "createdAt": "2019-07-23T20:04:14+00:00",
    "createdBy": {
        "userId": 100,
        "userName": "johnSmith100"
    }
}, {
    "id": 1,
    "conversationId": "bot1",
    "body": "hello John",
    "read": {
        "status": true,
        "timestamp": "2019-07-23T20:10:14+00:00"
    },
    "recipient": {
        "userId": 100,
        "userName": "johnSmith100"
    },
    "createdAt": "2019-07-23T20:10:14+00:00",
    "createdBy": {
        "userId": 1,
        "userName": "mikeham98"
    }
}];