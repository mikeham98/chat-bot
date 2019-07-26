import axiosInstance from '../../../app/actions/axiosInstance';
import {constants, getConversationList, setCurrentConversation} from '../../../app/actions/conversations/index.actions';
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
            it('should call dispatch twice with an action of type GET_CONVERSATION_LIST and a payload of conversations', () => {
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
    describe('setCurrentConversation', () => {
        it('should equal an object with a payload of SET_CURRENT_CONVERSATION and a payload of 42', () => {
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