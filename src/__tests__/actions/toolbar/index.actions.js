import axiosInstance from '../../../app/actions/axiosInstance';
import {constants, sendMessage} from '../../../app/actions/toolbar/index.actions';
import MockAdapter from 'axios-mock-adapter';
import {getMessages} from '../../../app/actions/messages/index.actions';

const mockAxios = new MockAdapter(axiosInstance);

jest.mock('../../../app/actions/messages/index.actions', () => ({
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
                mockAxios.onPost('http://localhost:3000/conversation/bot1/messages').reply(200);
            });
            it('should call dispatch with an action of type GET_CONVERSATION_MESSAGES and a payload of messages', () => {
                expect(callback).not.toHaveBeenCalled();
                expect(getMessages).not.toHaveBeenCalled();
                expect(dispatch).not.toHaveBeenCalled();

                return dispatch(sendMessage('bot1', 'this is a message', callback)).then(() => {
                    expect(callback).toHaveBeenCalledTimes(1);
                    expect(dispatch).toHaveBeenCalledTimes(1);
                    expect(getMessages).toHaveBeenCalledTimes(1);
                    expect(getMessages).toHaveBeenCalledWith('bot1');
                });
            });
        });
    });
});