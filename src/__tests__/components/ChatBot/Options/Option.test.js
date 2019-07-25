import React from 'react';
import {shallow} from 'enzyme';
import Option from '../../../../app/components/ChatBot/Options/Option';

describe('Option', () => {
    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<Option {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            disabled: false,
            selected: false,
            option: 'Option name',
            onClick: jest.fn()
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a div with a className of messageOption', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a div with a className of messageOption and messageOptionSelected', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a div with a className of messageOption and messageOptionDisabled', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('prop', () => {
            describe('onClick', () => {
                it('should be called on onClick of div', () => {
                    const event = {
                        stopPropagation: jest.fn()
                    };
                    expect(event.stopPropagation).not.toHaveBeenCalled();
                    expect(props.onClick).not.toHaveBeenCalled();
                    wrapper().find('div').first().props().onClick(event);
                    expect(event.stopPropagation).toHaveBeenCalledTimes(1);
                    expect(props.onClick).toHaveBeenCalledTimes(1);
                });
                it('should not called on onClick of div because it is disabled', () => {
                    props.disabled = true;
                    const event = {
                        stopPropagation: jest.fn()
                    };
                    expect(event.stopPropagation).not.toHaveBeenCalled();
                    expect(props.onClick).not.toHaveBeenCalled();
                    wrapper().find('div').first().props().onClick(event);
                    expect(event.stopPropagation).not.toHaveBeenCalled();
                    expect(props.onClick).not.toHaveBeenCalled();
                });
            });
        });
    });
});