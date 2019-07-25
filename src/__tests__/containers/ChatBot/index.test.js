import React from 'react';
// import babel-polyfill to allow async/await
import 'babel-polyfill';
import {shallow} from 'enzyme';
import {ChatBotContainer} from '../../../app/containers/ChatBot/index';
import {setOption} from '../../../app/actions/chatBot/messages/index.actions';

jest.mock('../../../app/actions/chatBot/messages/index.actions', () => ({
    setOption: jest.fn()
}));

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
            currentConversationId: 100,
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
                it('should call getMessages on mount', () => {
                    expect(props.getMessages).not.toHaveBeenCalled();
                    wrapper();
                    expect(props.getMessages).toHaveBeenCalledTimes(1);
                    expect(props.getMessages).toHaveBeenCalledWith(100);
                });
                it('should call getMessages on update only when props have changes', () => {
                    expect(props.getMessages).not.toHaveBeenCalled();
                    wrapper();
                    expect(props.getMessages).toHaveBeenCalledTimes(1);
                    wrapper().update();
                    // should still only have called getMessages once because currentConversationId is still 100
                    expect(props.getMessages).toHaveBeenCalledTimes(1);
                    wrapper().setProps({
                        currentConversationId: 50
                    });
                    // should now call getMessages because currentConversationId has changed
                    expect(props.getMessages).toHaveBeenCalledTimes(2);
                    expect(props.getMessages).toHaveBeenNthCalledWith(1, 100);
                    expect(props.getMessages).toHaveBeenNthCalledWith(2, 50);
                });
            });
            describe('sendMessage', () => {
                it('should be called with currentConversationId of 100 on call of ChatBot prop sendMessage', () => {
                    const message = 'this is a message';
                    const callback = jest.fn();
                    expect(props.sendMessage).not.toHaveBeenCalled();
                    wrapper().find('ChatBot').first().props().sendMessage(message, callback);
                    expect(props.sendMessage).toHaveBeenCalledTimes(1);
                    expect(props.sendMessage).toHaveBeenCalledWith(100, message, expect.any(Function));
                });
            });
            describe('setOption', () => {
                it('should be called call of onClickOption with 42 (optionId), 5 (messageId), and a function (getMessages)', () => {
                    const optionId = 42;
                    const messageId = 5;
                    expect(setOption).not.toHaveBeenCalled();
                    wrapper().find('ChatBot').first().props().onClickOption(optionId, messageId);
                    expect(setOption).toHaveBeenCalledTimes(1);
                    expect(setOption).toHaveBeenCalledWith(42, 5, expect.any(Function));
                });
            });
        });
    });
});