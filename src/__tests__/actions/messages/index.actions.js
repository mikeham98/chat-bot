import axiosInstance from '../../../app/actions/axiosInstance';
import {constants, getMessages} from '../../../app/actions/messages/index.actions';
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
            it('should call dispatch with an action of type GET_CONVERSATION_MESSAGES and a payload of messages', () => {
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