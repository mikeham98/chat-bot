import {conversationSelector, currentConversationSelector} from '../../app/selectors/conversationSelector';

describe('conversation selectors', () => {
    let state = {};
    beforeEach(() => {
        state = {
            conversations: {
                conversations: [{
                    id: 1,
                    userName: "bot1",
                }, {
                    id: 2,
                    userName: "bot2",
                }, {
                    id: 3,
                    userName: "bot3",
                }],
                currentConversationId: 2
            }
        }
    });

    describe('currentConversationSelector', () => {
        it('should return an object with an id of 2 and a userName of bot2', () => {
            expect(currentConversationSelector(state)).toEqual({
                id: 2,
                userName: "bot2",
            })
        });
        it('should return an empty object because currentConversationId ' +
            'does not match any id in the conversations array', () => {
            state.conversations.currentConversationId = 100;
            expect(currentConversationSelector(state)).toEqual({})
        });
    });
    describe('conversationSelector', () => {
        it('should return current conversation and conversations ' +
            'with bot2 to have a feature of selected true', () => {
            expect(conversationSelector(state)).toEqual({
                conversations: [{
                    id: 1,
                    userName: "bot1",
                    selected: false
                }, {
                    id: 2,
                    userName: "bot2",
                    selected: true
                }, {
                    id: 3,
                    userName: "bot3",
                    selected: false
                }],
                currentConversation: {
                    id: 2,
                    userName: "bot2"
                }
            })
        });
    });
});