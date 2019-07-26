import {messagesSelector} from '../../app/selectors/messagesSelector';

jest.mock("../../app/selectors/conversationSelector", () => ({
    currentConversationSelector: () => ({
        id: 3,
        userName: 'bot3'
    })
}));

describe('messages selectors', () => {
    let state = {};
    beforeEach(() => {
        state = {
            messages: {
                messages: [1,2,3,4,5],
                replying: [1,3]
            }
        }
    });

    describe('messagesSelector', () => {
        it('should return messages and replying set to true', () => {
            expect(messagesSelector(state)).toEqual({
                messages: [1,2,3,4,5],
                replying: true
            })
        });
        it('should return messages and replying set to false', () => {
            state.messages.replying = [1];
            expect(messagesSelector(state)).toEqual({
                messages: [1,2,3,4,5],
                replying: false
            })
        });
        it('should return messages and replying set to false because the replying array is empty', () => {
            state.messages.replying = [];
            expect(messagesSelector(state)).toEqual({
                messages: [1,2,3,4,5],
                replying: false
            })
        });
    });
});