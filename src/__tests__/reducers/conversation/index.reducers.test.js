import conversationReducer from '../../../app/reducers/conversations/index.reducers';

describe('conversationReducer', () => {
    describe('with action type', () => {
        describe('RANDOM', () => {
            it('should return current state', () => {
                const state = {
                    conversations: ["1", "2", "3"],
                    currentConversationId: "3"
                };
                const action = {
                    type: 'RANDOM',
                    payload: ["1", "2", "3", "4", "5"]
                };
                expect(conversationReducer(state, action)).toEqual(state);
            });

            it('should return initial state', () => {
                const action = {
                    type: 'RANDOM',
                    payload: ["1", "2", "3", "4", "5"]
                };
                const initialState = {
                    conversations: [],
                    currentConversationId: "1"
                };
                expect(conversationReducer(undefined, action)).toEqual(initialState);
            })
        });
        describe('GET_CONVERSATION_LIST', () => {
            it('should return current state with a new conversations array', () => {
                const state = {
                    conversations: ["1", "2", "3"],
                    currentConversationId: "3"
                };
                const action = {
                    type: 'GET_CONVERSATION_LIST',
                    payload: ["1", "2", "3", "4", "5"]
                };
                const expectedState = {
                    conversations: ["1", "2", "3", "4", "5"],
                    currentConversationId: "3"
                };
                expect(conversationReducer(state, action)).toEqual(expectedState);
            });
        });
        describe('SET_CURRENT_CONVERSATION', () => {
            it('should return current state with a currentConversationId set from 3 to 1', () => {
                const state = {
                    conversations: ["1", "2", "3"],
                    currentConversationId: "3"
                };
                const action = {
                    type: 'SET_CURRENT_CONVERSATION',
                    payload: "1"
                };
                const expectedState = {
                    conversations: ["1", "2", "3"],
                    currentConversationId: "1"
                };
                expect(conversationReducer(state, action)).toEqual(expectedState);
            });
        });
    });
});