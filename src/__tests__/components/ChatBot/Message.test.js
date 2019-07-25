import React from 'react';
import {shallow} from 'enzyme';
import Message from '../../../app/components/ChatBot/Message';
import Options from '../../../app/components/ChatBot/Options/Options';

describe('Message', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<Message {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            id: 100,
            body: 'Hello world',
            dateTime: '10 minutes ago',
            showDateTime: false,
            media: [1, 2],
            options: [1, 2, 3, 4, 5],
            onClickBody: jest.fn(),
            onClickOption: jest.fn(),
            selectedOption: 1
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a message body with media and options', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a message body without media', () => {
            props.media = [];
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a message body without options', () => {
            props.options = [];
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a message body with media and options along with showDateTime', () => {
            wrapper().setProps({
                showDateTime: true
            });
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('prop', () => {
            describe('onClickBody', () => {
                it('should be called on onClick of message div', () => {
                    expect(props.onClickBody).not.toHaveBeenCalled();
                    wrapper().find('.message').first().props().onClick();
                    expect(props.onClickBody).toHaveBeenCalledTimes(1);
                });
            });
            describe('onClickOption', () => {
                it('should be called on onClick of Options component', () => {
                    expect(props.onClickOption).not.toHaveBeenCalled();
                    wrapper().find(Options).first().props().onClick(5);
                    expect(props.onClickOption).toHaveBeenCalledTimes(1);
                    expect(props.onClickOption).toHaveBeenCalledWith(5, 100);
                });
            });
        });
    });
});