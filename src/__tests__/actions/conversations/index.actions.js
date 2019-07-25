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
            it('should call dispatch twice with an action of type GET_CONVERSATION_LIST and a payload of conversations and ' +
                'and a second time with an action of type SET_CURRENT_CONVERSATION and a payload of 1', () => {
                mockAxios.onGet('http://localhost:3000/conversation/').reply(200, conversations);
                expect(mockDispatch).not.toHaveBeenCalled();

                return dispatch(getConversationList()).then(() => {
                    expect(mockDispatch).toHaveBeenCalledTimes(2);
                    expect(mockDispatch).toHaveBeenNthCalledWith(1, {
                        type: constants.GET_CONVERSATION_LIST,
                        payload: conversations
                    });
                    expect(mockDispatch).toHaveBeenNthCalledWith(2, {
                        type: constants.SET_CURRENT_CONVERSATION,
                        payload: 1
                    });
                });
            });
            it('should call dispatch once with an action of type GET_CONVERSATION_LIST and a payload of conversations', () => {
                mockAxios.onGet('http://localhost:3000/conversation/').reply(200, []);
                expect(mockDispatch).not.toHaveBeenCalled();

                return dispatch(getConversationList()).then(() => {
                    expect(mockDispatch).toHaveBeenCalledTimes(1);
                    expect(mockDispatch).toHaveBeenCalledWith({
                        type: constants.GET_CONVERSATION_LIST,
                        payload: []
                    });
                });
            });
        });
    });
    describe('setCurrentConversation', () => {
        it('should equal an object with a payload of SET_CURRENT_CONVERSATION and a payload of 42', () => {
            expect(setCurrentConversation(42)).toEqual({
                type: constants.SET_CURRENT_CONVERSATION,
                payload: 42
            });
        });
    });
});

const conversations = [{id: 1}, {id: 2}, {id: 3}];