import React from 'react';
import {shallow} from 'enzyme';
import {ChatBotContainer} from '../../../app/containers/ChatBot/index';
import ChatBot from '../../../app/components/ChatBot/index';

describe('ChatBotContainer', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<ChatBotContainer {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            getMessages: jest.fn(),
            sendMessage: jest.fn(),
            setOption: jest.fn(),
            messages: [1, 2, 3, 4, 5],
            replying: true,
            currentConversation: {
                id: "100",
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
            currentUserId: 1
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return ChatBot component', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('props', () => {
            describe('getMessages', () => {
                it('should be called on mount', () => {
                    expect(props.getMessages).not.toHaveBeenCalled();
                    wrapper();
                    expect(props.getMessages).toHaveBeenCalledTimes(1);
                    expect(props.getMessages).toHaveBeenCalledWith("100");
                });
                it('should be called on update only when props have changes', () => {
                    expect(props.getMessages).not.toHaveBeenCalled();
                    wrapper();
                    expect(props.getMessages).toHaveBeenCalledTimes(1);
                    wrapper().update();
                    // should still only have called getMessages once because currentConversationId is still 100
                    expect(props.getMessages).toHaveBeenCalledTimes(1);
                    wrapper().setProps({
                        currentConversation: {
                            ...props.currentConversation,
                            id: "50"
                        }
                    });
                    // should now call getMessages because currentConversationId has changed
                    expect(props.getMessages).toHaveBeenCalledTimes(2);
                    expect(props.getMessages).toHaveBeenNthCalledWith(1, "100");
                    expect(props.getMessages).toHaveBeenNthCalledWith(2, "50");
                });
            });
            describe('sendMessage', () => {
                it('should be called with currentConversationId of 100 on call of ChatBot prop sendMessage', () => {
                    const message = 'this is a message';
                    const callback = jest.fn();
                    expect(props.sendMessage).not.toHaveBeenCalled();
                    wrapper().find(ChatBot).first().props().sendMessage(message, callback);
                    expect(props.sendMessage).toHaveBeenCalledTimes(1);
                    expect(props.sendMessage).toHaveBeenCalledWith("100", message, expect.any(Function));
                });
            });
            describe('setOption', () => {
                it('should be called call of onClickOption with 42 (optionId), 5 (messageId), and a function (getMessages)', () => {
                    const optionId = 42;
                    const messageId = 5;
                    expect(props.setOption).not.toHaveBeenCalled();
                    wrapper().find(ChatBot).first().props().onClickOption(optionId, messageId);
                    expect(props.setOption).toHaveBeenCalledTimes(1);
                    expect(props.setOption).toHaveBeenCalledWith(42, 5, expect.any(Function), "100");
                });
            });
        });
    });
});