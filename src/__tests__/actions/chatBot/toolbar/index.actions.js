import axiosInstance from '../../../../app/actions/axiosInstance';
import {constants, sendMessage} from '../../../../app/actions/chatBot/toolbar/index.actions';
import MockAdapter from 'axios-mock-adapter';
import {getMessages} from '../../../../app/actions/chatBot/messages/index.actions';
import {currentUser} from "../../../../../db/config";

// I have mocked the file i am testing so that I can mock out the back end functions but keep the sendMessage function
jest.mock('../../../../app/actions/chatBot/toolbar/index.actions', () => ({
    ...(jest.requireActual('../../../../app/actions/chatBot/toolbar/index.actions')),
    handleBackEndGetMessages: jest.fn(),
    handleBackEndBotResponse: jest.fn(),
}));

const mockAxios = new MockAdapter(axiosInstance);

jest.mock('../../../../app/actions/chatBot/messages/index.actions', () => ({
    getMessages: jest.fn()
}));

describe('toolbar actions', () => {

    const mockDispatch = jest.fn();
    const dispatch = jest.fn((thunk) => thunk(mockDispatch));
    const callback = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('sendMessage', () => {
        describe('success', () => {
            beforeEach(() => {
                mockAxios.onPost('http://localhost:3000/conversation/1/messages').reply(200, {
                    content: {
                        body: 'hello world'
                    },
                    recipient: {
                        userId: '1',
                        userName: 'bot1',
                    },
                    createdAt: new Date(),
                    createdBy: 'mikeham98'
                });
            });
            it('should call dispatch with an action of type GET_CONVERSATION_MESSAGES and a payload of messages', () => {
                expect(callback).not.toHaveBeenCalled();
                expect(getMessages).not.toHaveBeenCalled();
                expect(dispatch).not.toHaveBeenCalled();

                return dispatch(sendMessage(1, 'this is a message', callback)).then(() => {
                    expect(callback).toHaveBeenCalledTimes(1);
                    expect(dispatch).toHaveBeenCalledTimes(1);
                    expect(getMessages).toHaveBeenCalledTimes(1);
                    expect(getMessages).toHaveBeenCalledWith(1);
                });
            });
        });
    });
});