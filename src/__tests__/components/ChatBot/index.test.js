import React from 'react';
import {shallow} from 'enzyme';
import ChatBot from '../../../app/components/ChatBot/index';

describe('ChatBot', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<ChatBot {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            messages: [1,2,3,4,5],
            replying: true,
            currentUserId: 1,
            botName: 'bot1',
            sendMessage: jest.fn(),
            onClickOption: jest.fn()
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return MessageList and MessageForm', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('prop', () => {
            describe('onClickOption', () => {
                it('should be called on onClick of message div', () => {
                    expect(props.onClickOption).not.toHaveBeenCalled();
                    wrapper().find('MessagesList').first().props().onClickOption();
                    expect(props.onClickOption).toHaveBeenCalledTimes(1);
                });
            });
            describe('sendMessage', () => {
                it('should be called on onClick of Options component', () => {
                    expect(props.sendMessage).not.toHaveBeenCalled();
                    wrapper().find('MessageForm').first().props().sendMessage();
                    expect(props.sendMessage).toHaveBeenCalledTimes(1);
                });
            });
        });
    });
});