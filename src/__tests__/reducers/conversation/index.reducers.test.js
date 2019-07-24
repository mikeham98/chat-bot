import conversationReducer from '../../../app/reducers/conversation/index.reducers';

describe('conversationReducer', () => {
    describe('with action type', () => {
        describe('RANDOM', () => {
            it('should return current state', () => {
                const state = {
                    messages: [1,2,3],
                    replying: true
                };
                const action = {
                    type: 'RANDOM',
                    payload: [1, 2, 3, 4, 5]
                };
                expect(conversationReducer(state, action)).toEqual(state);
            });

            it('should return initial state', () => {
                const action = {
                    type: 'RANDOM',
                    payload: [1, 2, 3, 4, 5]
                };
                const initialState = {
                    messages: [],
                    replying: false
                };
                expect(conversationReducer(undefined, action)).toEqual(initialState);
            })
        });
        describe('GET_CONVERSATION_MESSAGES', () => {
            it('should return current state with a new messages array', () => {
                const state = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: true
                };
                const action = {
                    type: 'GET_CONVERSATION_MESSAGES',
                    payload: [1, 2, 3, 4, 5]
                };
                const expectedState = {
                    messages: [1, 2, 3, 4, 5],
                    replying: true
                };
                expect(conversationReducer(state, action)).toEqual(expectedState);
            });
        });
    });
});