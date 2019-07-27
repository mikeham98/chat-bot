import axiosInstance from '../../../app/actions/axiosInstance';
import {constants, getConversationList, setColor, setCurrentConversation} from '../../../app/actions/conversations/index.actions';
import MockAdapter from 'axios-mock-adapter';

const mockAxios = new MockAdapter(axiosInstance);

describe('conversation actions', () => {

    const mockDispatch = jest.fn();
    const dispatch = jest.fn((thunk) => thunk(mockDispatch));

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getConversationList', () => {
        describe('success', () => {
            it('should call mockDispatch twice with an action of type GET_CONVERSATION_LIST and a payload of conversations', () => {
                mockAxios.onGet('http://localhost:3000/conversation/').reply(200, conversations);
                expect(mockDispatch).not.toHaveBeenCalled();

                return dispatch(getConversationList()).then(() => {
                    expect(mockDispatch).toHaveBeenCalledTimes(1);
                    expect(mockDispatch).toHaveBeenNthCalledWith(1, {
                        type: constants.GET_CONVERSATION_LIST,
                        payload: conversations
                    });
                });
            });
        });
    });
    describe('setColor', () => {
        it('should call mockDispatch', () => {
            const color = 'red';
            mockAxios.onPatch('http://localhost:3000/conversation/10', {color}).reply(200);
            const conversationId = '10';
            expect(mockDispatch).not.toHaveBeenCalled();
            return dispatch(setColor(color, conversationId)).then(() => {
                expect(mockDispatch).toHaveBeenCalledTimes(1);
                expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
            });
        });
    });
    describe('setCurrentConversation', () => {
        it('should call mockDispatch twice, firstly with a action of type SET_CURRENT_CONVERSATION and ' +
            'a payload of 42, and secondly with a function', () => {
            mockAxios.onPatch('http://localhost:3000/conversation/42').reply(200);
            expect(mockDispatch).not.toHaveBeenCalled();

            return dispatch(setCurrentConversation(42)).then(() => {
                expect(mockDispatch).toHaveBeenCalledTimes(2);
                expect(mockDispatch).toHaveBeenNthCalledWith(1, {
                    type: constants.SET_CURRENT_CONVERSATION,
                    payload: 42
                });
                expect(mockDispatch).toHaveBeenNthCalledWith(2, expect.any(Function));
            });
        });
    });
});

const conversations = [{id: 1}, {id: 2}, {id: 3}];