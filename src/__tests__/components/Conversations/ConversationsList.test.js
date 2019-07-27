import React from 'react';
import {shallow} from 'enzyme';
import ConversationsList from '../../../app/components/Conversations/ConversationsList'
import Conversation from '../../../app/components/Conversations/Conversation'

describe('ConversationsList', () => {
    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<ConversationsList {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            conversations,
            onClickConversation: jest.fn()
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return three Conversation components for each bot (1-3)', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('onClickConversation', () => {
            it('should be called with "2" on click of the second Conversation', () => {
                expect(props.onClickConversation).not.toHaveBeenCalled();
                wrapper().find(Conversation).at(1).props().onClick();
                expect(props.onClickConversation).toHaveBeenCalledTimes(1);
                expect(props.onClickConversation).toHaveBeenCalledWith("2");
            });
        });
    });
});

const conversations = [
    {
        "id": "1",
        "userId": "bot1",
        "userName": "travel_bot",
        "color": "#9A58B9",
        "profile": {
            "name": "TravelBot",
            "img": "https://images.unsplash.com/photo-1496046744122-2328018d60b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1664&q=80"
        },
        "read": false,
        "latest": {
            "message": "So just to confirm, you want to go to Florida for 2 weeks from August 12th (fly out 10am) August 26 (return flight 2pm) with 3 people.",
            "createdAt": "2019-07-26T20:36:26.725Z"
        }
    },
    {
        "id": "2",
        "userId": "bot2",
        "userName": "pizza_bot",
        "color": "#1ccb9e",
        "profile": {
            "name": "PizzaBot",
            "img": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
        },
        "read": true,
        "latest": {
            "message": "Voila, your pizza has been made and is out for delivery",
            "createdAt": "2019-07-26T21:06:10.731Z"
        }
    },
    {
        "id": "3",
        "userId": "bot3",
        "userName": "web_search_bot",
        "color": "#F1C40E",
        "profile": {
            "name": "WebSearchBot",
            "img": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
        },
        "read": true,
        "latest": {
            "message": "You`re welcome, is there anything else I can help you with?",
            "createdAt": "2019-07-26T21:06:29.724Z"
        }
    }
];