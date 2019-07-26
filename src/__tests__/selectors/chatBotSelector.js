import {chatBotSelector} from "../../app/selectors/chatBotSelector";

jest.mock("../../app/selectors/conversationSelector", () => ({
    conversationSelector: () => ({
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
}));

jest.mock("../../app/selectors/messagesSelector", () => ({
    messagesSelector: () => ({
        messages: [1, 2, 3, 4, 5],
        replying: [1, 3]
    })
}));

describe('chatBot selector', () => {

    describe('chatBotSelector', () => {
        it('should return an object with messages, replying, currentUserId and currentConversation', () => {
            expect(chatBotSelector({})).toEqual({
                messages: [1, 2, 3, 4, 5],
                replying: [1, 3],
                currentUserId: 1,
                currentConversation: {
                    id: 2,
                    userName: "bot2"
                }
            });
        });
    });
});