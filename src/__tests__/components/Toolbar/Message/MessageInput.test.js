import React from 'react';
import {shallow} from 'enzyme';
import MessageInput from '../../../../app/components/Toolbar/Message/MessageInput';

describe('MessageInput', () => {
    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<MessageInput {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            value: 'This is a message',
            onChange: jest.fn(),
            onBlur: jest.fn(),
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return an input component', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        describe('props', () => {
            describe('onChange', () => {
                it('should be called onChange of input', () => {
                    const event = {e:{target: {value: 'This is also a message'}}};
                    expect(props.onChange).not.toHaveBeenCalled();
                    wrapper().find('input').first().props().onChange(event);
                    expect(props.onChange).toHaveBeenCalledTimes(1);
                    expect(props.onChange).toHaveBeenCalledWith(event);
                });
            });
            describe('onBlur', () => {
                it('should be called onBlur of input', () => {
                    const event = {e:{target: {value: 'This is a message'}}};
                    expect(props.onBlur).not.toHaveBeenCalled();
                    wrapper().find('input').first().props().onBlur(event);
                    expect(props.onBlur).toHaveBeenCalledTimes(1);
                    expect(props.onBlur).toHaveBeenCalledWith(event);
                });
            });
        });
    });
});