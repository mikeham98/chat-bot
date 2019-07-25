import messagesReducer from '../../../app/reducers/messages/index.reducers';

describe('messagesReducer', () => {
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
                expect(messagesReducer(state, action)).toEqual(state);
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
                expect(messagesReducer(undefined, action)).toEqual(initialState);
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
                expect(messagesReducer(state, action)).toEqual(expectedState);
            });
        });
        describe('START_BOT_TYPING', () => {
            it('should return current state and set replying to true', () => {
                const state = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: false
                };
                const action = {
                    type: 'START_BOT_TYPING'
                };
                const expectedState = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: true
                };
                expect(messagesReducer(state, action)).toEqual(expectedState);
            });
        });
        describe('STOP_BOT_TYPING', () => {
            it('should return current state and set replying from true to false', () => {
                const state = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: true
                };
                const action = {
                    type: 'STOP_BOT_TYPING'
                };
                const expectedState = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: false
                };
                expect(messagesReducer(state, action)).toEqual(expectedState);
            });
        });
    });
});