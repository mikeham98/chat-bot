import React from 'react';
import {shallow} from 'enzyme';
import {ConversationsListContainer} from '../../../app/containers/Conversations/ConversationsListContainer';
import ConversationsList from '../../../app/components/Conversations/ConversationsList';

describe('ConversationsListContainer', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<ConversationsListContainer {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            getConversationList: jest.fn(),
            setCurrentConversation: jest.fn(),
            conversations: ["1", "2", "3"],
            currentConversation: {
                id: "3",
                userId: "bot42",
                userName: "travel_bot",
                color: "#9A58B9",
                profile: {
                    name: "TravelBot",
                    img: "https://images.unsplash.com/photo-1496046744122-2328018d60b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1664&q=80"
                },
                read: true,
                latest: {
                    message: "So just to confirm, you want to go to Florida for 2 weeks from August 12th (fly out 10am) August 26 (return flight 2pm) with 3 people.",
                    createdAt: "2019-07-26T20:36:26.725Z"
                }
            },
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return ConversationsList component', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('props', () => {
            describe('getConversationList', () => {
                it('should be called on mount', () => {
                    expect(props.getConversationList).not.toHaveBeenCalled();
                    wrapper();
                    expect(props.getConversationList).toHaveBeenCalledTimes(1);
                });
            });
            describe('setCurrentConversation', () => {
                it('should be called on mount with a value of 1', () => {
                    expect(props.setCurrentConversation).not.toHaveBeenCalled();
                    wrapper();
                    expect(props.setCurrentConversation).toHaveBeenCalledWith("1");
                });
                it('should be called on call of prop onClickConversation on ConversationList', () => {
                    expect(props.setCurrentConversation).not.toHaveBeenCalled();
                    wrapper();
                    // clear call on mount
                    jest.clearAllMocks();
                    wrapper().find(ConversationsList).first().props().onClickConversation("2");
                    expect(props.setCurrentConversation).toHaveBeenCalledWith("2");
                });
                it('should not be called on call of prop onClickConversation on ConversationList ' +
                    'due to matching conversationId', () => {
                    expect(props.setCurrentConversation).not.toHaveBeenCalled();
                    wrapper();
                    // clear call on mount
                    jest.clearAllMocks();
                    wrapper().find(ConversationsList).first().props().onClickConversation("3");
                    expect(props.setCurrentConversation).not.toHaveBeenCalled();
                });
            });
        });
    });
});