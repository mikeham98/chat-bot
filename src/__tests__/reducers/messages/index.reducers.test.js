import messagesReducer from '../../../app/reducers/messages/index.reducers';
import {constants} from "../../../app/actions/chatBot/messages/index.actions";

describe('messagesReducer', () => {
    describe('with action type', () => {
        describe('RANDOM', () => {
            it('should return current state', () => {
                const state = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: ['banana'],
                    botInProgress: ['banana']
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
                    replying: [],
                    botInProgress: []
                };
                expect(messagesReducer(undefined, action)).toEqual(initialState);
            })
        });
        describe('GET_CONVERSATION_MESSAGES', () => {
            it('should return current state with a new messages array', () => {
                const state = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: ['banana']
                };
                const action = {
                    type: 'GET_CONVERSATION_MESSAGES',
                    payload: ['banana', 'pear']
                };
                const expectedState = {
                    messages: ['banana', 'pear'],
                    replying: ['banana']
                };
                expect(messagesReducer(state, action)).toEqual(expectedState);
            });
        });
        describe('START_BOT_TYPING', () => {
            it('should return current state and set replying to true', () => {
                const state = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: [],
                    botInProgress: []
                };
                const action = {
                    type: 'START_BOT_TYPING',
                    payload: 'apple'
                };
                const expectedState = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: ['apple'],
                    botInProgress: []
                };
                expect(messagesReducer(state, action)).toEqual(expectedState);
            });
        });
        describe('STOP_BOT_TYPING', () => {
            it('should return current state and set replying from true to false', () => {
                const state = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: ['apple','banana'],
                    botInProgress: []
                };
                const action = {
                    type: 'STOP_BOT_TYPING',
                    payload: 'apple'
                };
                const expectedState = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: ['banana'],
                    botInProgress: []
                };
                expect(messagesReducer(state, action)).toEqual(expectedState);
            });
        });
        describe('BOT_IN_PROGRESS', () => {
            it('should return current state and set replying to true', () => {
                const state = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: [],
                    botInProgress: ['apple']
                };
                const action = {
                    type: 'BOT_IN_PROGRESS',
                    payload: 'orange'
                };
                const expectedState = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: [],
                    botInProgress: ['apple', 'orange']
                };
                expect(messagesReducer(state, action)).toEqual(expectedState);
            });
        });
        describe('BOT_NOT_IN_PROGRESS', () => {
            it('should return current state and set replying from true to false', () => {
                const state = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: [],
                    botInProgress: ['apple','banana']
                };
                const action = {
                    type: 'BOT_NOT_IN_PROGRESS',
                    payload: 'apple'
                };
                const expectedState = {
                    messages: ['apple', 'orange', 'banana'],
                    replying: [],
                    botInProgress: ['banana']
                };
                expect(messagesReducer(state, action)).toEqual(expectedState);
            });
        });
    });
});